import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert, ActivityIndicator } from 'react-native';
import { useAuth } from '../contexts/AuthContext';
import { supabase } from '../lib/supabase';

export default function PaywallScreen() {
  const [loading, setLoading] = useState(false);
  const [hasAccess, setHasAccess] = useState(false);
  const { user } = useAuth();

  useEffect(() => {
    checkUserAccess();
  }, [user]);

  const checkUserAccess = async () => {
    if (!user) return;

    try {
      const { data, error } = await supabase
        .from('stripe_customers')
        .select('*')
        .eq('user_id', user.id)
        .single();

      if (data && data.subscription_status === 'active') {
        setHasAccess(true);
      }
    } catch (error) {
      console.log('No subscription found');
    }
  };

  const handlePurchase = async () => {
    if (!user) return;

    setLoading(true);
    try {
      // For now, we'll simulate a successful purchase
      // In production, you'd integrate with Apple/Google Pay or Stripe
      
      // Create a mock subscription record
      const { error } = await supabase
        .from('stripe_customers')
        .insert({
          user_id: user.id,
          email: user.email,
          subscription_status: 'active',
          subscription_type: 'mobile_app',
          created_at: new Date().toISOString()
        });

      if (error) throw error;

      Alert.alert(
        'Purchase Successful!',
        'Welcome to Simple Diary Pro! You now have full access to all features.',
        [{ text: 'Continue', onPress: () => setHasAccess(true) }]
      );
    } catch (error) {
      Alert.alert('Purchase Failed', 'Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  if (hasAccess) {
    return null; // User has access, don't show paywall
  }

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Unlock Simple Diary Pro</Text>
        <Text style={styles.subtitle}>
          Get unlimited access to all diary features
        </Text>

        <View style={styles.features}>
          <Text style={styles.feature}>✓ Unlimited diary entries</Text>
          <Text style={styles.feature}>✓ Cloud sync across devices</Text>
          <Text style={styles.feature}>✓ Export your data</Text>
          <Text style={styles.feature}>✓ Priority support</Text>
        </View>

        <View style={styles.pricing}>
          <Text style={styles.price}>$1.99</Text>
          <Text style={styles.priceSubtext}>One-time purchase</Text>
        </View>

        <TouchableOpacity 
          style={[styles.button, loading && styles.buttonDisabled]}
          onPress={handlePurchase}
          disabled={loading}
        >
          {loading ? (
            <ActivityIndicator color="white" />
          ) : (
            <Text style={styles.buttonText}>Purchase Now</Text>
          )}
        </TouchableOpacity>

        <Text style={styles.disclaimer}>
          Payment will be processed through your app store account
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    padding: 20,
  },
  content: {
    maxWidth: 400,
    alignSelf: 'center',
    width: '100%',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 8,
    color: '#000000',
  },
  subtitle: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 32,
    color: '#6b7280',
  },
  features: {
    marginBottom: 32,
  },
  feature: {
    fontSize: 16,
    marginBottom: 12,
    color: '#374151',
  },
  pricing: {
    alignItems: 'center',
    marginBottom: 32,
  },
  price: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#000000',
  },
  priceSubtext: {
    fontSize: 16,
    color: '#6b7280',
  },
  button: {
    backgroundColor: '#000000',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 16,
  },
  buttonDisabled: {
    opacity: 0.6,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  },
  disclaimer: {
    fontSize: 12,
    textAlign: 'center',
    color: '#9ca3af',
  },
});
