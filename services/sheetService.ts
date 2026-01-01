
import { LeadFormData } from '../types';

const SHEETDB_API_URL = 'https://sheetdb.io/api/v1/czatwlt4x2234';

export const submitLeadToSheet = async (data: LeadFormData): Promise<boolean> => {
  try {
    const response = await fetch(SHEETDB_API_URL, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        data: [
          {
            ...data,
            date: new Date().toLocaleString('fa-IR')
          }
        ]
      })
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const result = await response.json();
    return !!result.created;
  } catch (error) {
    console.error('Error submitting lead:', error);
    return false;
  }
};
