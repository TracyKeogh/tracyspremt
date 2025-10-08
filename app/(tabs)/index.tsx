import { View, Text, StyleSheet, ScrollView, TextInput, ActivityIndicator } from 'react-native';
import { useState, useCallback, useRef, memo, useEffect } from 'react';
import { useAuth } from '../../contexts/AuthContext';
// import { supabase } from '../../lib/supabase';

export default function SimpleDiary() {
  const { user } = useAuth();
  const [entries, setEntries] = useState<{ [key: string]: string }>({});
  const [loading, setLoading] = useState(true);

  const times = [
    '5AM', '6AM', '7AM', '8AM', '9AM', '10AM', '11AM',
    '12PM', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM',
    '7PM', '8PM', '9PM', '10PM', '11PM'
  ];

  useEffect(() => {
    loadEntries();
  }, []);

  const loadEntries = async () => {
    try {
      // Load from local storage instead of Supabase for now
      const today = new Date().toISOString().split('T')[0];
      const storageKey = `diary_entries_${today}`;
      
      // TODO: In the future, load from Supabase with user ID filter
      // const { data, error } = await supabase
      //   .from('diary_entries')
      //   .select('*')
      //   .eq('user_id', user?.id)
      //   .eq('date', today);
      
      setLoading(false);
    } catch (error) {
      console.error('Error loading entries:', error);
      setLoading(false);
    }
  };

  const updateEntry = useCallback(async (key: string, value: string) => {
    setEntries((prev) => ({
      ...prev,
      [key]: value
    }));

    try {
      // TODO: Save to Supabase with user ID
      // const today = new Date().toISOString().split('T')[0];
      // await supabase
      //   .from('diary_entries')
      //   .upsert({
      //     user_id: user?.id,
      //     date: today,
      //     time_slot: key,
      //     content: value
      //   });
      
      console.log('Entry saved locally:', key, value);
    } catch (error) {
      console.error('Error saving entry:', error);
    }
  }, [user]);

  const Slot = memo(({ time, slot, initialValue, onUpdate }: { 
    time: string; 
    slot: number; 
    initialValue: string;
    onUpdate: (key: string, text: string) => void;
  }) => {
    const key = `${time}-${slot}`;
    const inputRef = useRef<TextInput>(null);
    const [currentText, setCurrentText] = useState(initialValue);

    const handleTextChange = (text: string) => {
      setCurrentText(text);
    };

    const handleBlur = () => {
      onUpdate(key, currentText);
    };

    return (
      <View style={styles.slotContainer}>
        <TextInput
          ref={inputRef}
          style={styles.slotInput}
          value={currentText}
          onChangeText={handleTextChange}
          onBlur={handleBlur}
          placeholder="Type here"
          placeholderTextColor="#d1d5db"
          autoCorrect={false}
          autoCapitalize="none"
          multiline={false}
          underlineColorAndroid="transparent"
          selectionColor="transparent"
          textAlignVertical="center"
        />
      </View>
    );
  });

  if (loading) {
    return (
      <View style={[styles.container, styles.centerContent]}>
        <ActivityIndicator size="large" color="#000000" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.maxWidth}>

        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerDate}>
            {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric' })}
          </Text>
          {user && (
            <Text style={styles.headerUser}>
              {user.user_metadata?.full_name || user.email}
            </Text>
          )}
        </View>

        {/* Entries */}
        <ScrollView style={styles.entriesContainer}>
          {times.map((time) => (
            <View key={time} style={styles.timeRow}>
              <View style={styles.timeRowContent}>
                <View style={styles.timeLabel}>
                  <Text style={styles.timeText}>{time}</Text>
                </View>
                <View style={styles.slotsContainer}>
                  <Slot 
                    time={time} 
                    slot={1} 
                    initialValue={entries[`${time}-1`] || ''} 
                    onUpdate={updateEntry}
                  />
                  <Slot 
                    time={time} 
                    slot={2} 
                    initialValue={entries[`${time}-2`] || ''} 
                    onUpdate={updateEntry}
                  />
                </View>
              </View>
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  centerContent: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  maxWidth: {
    flex: 1,
    maxWidth: 384,
    alignSelf: 'center',
    width: '100%',
  },
  header: {
    paddingHorizontal: 20,
    paddingVertical: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
  },
  headerDate: {
    fontSize: 24,
    fontWeight: '300',
    color: '#000000',
  },
  headerUser: {
    fontSize: 14,
    color: '#6b7280',
    marginTop: 4,
  },
  entriesContainer: {
    flex: 1,
  },
  timeRow: {
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
  },
  timeRowContent: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  timeLabel: {
    width: 64,
    paddingTop: 16,
    paddingLeft: 20,
  },
  timeText: {
    fontSize: 12,
    color: '#9ca3af',
  },
  slotsContainer: {
    flex: 1,
    paddingVertical: 12,
    paddingRight: 20,
  },
  slotContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
  },
  slotInput: {
    flex: 1,
    fontSize: 14,
    color: '#000000',
    paddingVertical: 4,
    paddingHorizontal: 0,
    minHeight: 20,
    borderWidth: 0,
    backgroundColor: 'transparent',
  },
});

