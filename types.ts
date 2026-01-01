
// Import React to resolve 'Cannot find namespace React' error on line 6
import React from 'react';

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
}

export interface LeadFormData {
  name: string;
  phone: string;
}

export interface ApiResponse {
  created?: number;
  error?: string;
}