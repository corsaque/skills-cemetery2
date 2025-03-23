import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, status, description, genai_impact } = req.body;

    // Validate inputs
    if (!name || !status || !description) {
      console.error('Validation error: Missing required fields');
      return res.status(400).json({ error: 'Missing required fields' });
    }

    try {
      // Insert the new skill into the database
      const { data, error } = await supabase.from('skills').insert([
        {
          name,
          status,
          description,
          genai_impact: genai_impact || false,
          created_at: new Date(), // Use the correct column name
          approval_status: 'pending',
          votes: 0, // Use the correct column name
        },
      ]);

      if (error) {
        console.error('Database error:', error.message);
        throw error;
      }

      res.status(201).json(data);
    } catch (error) {
      console.error('Unexpected error:', error.message);
      res.status(500).json({ error: 'Internal Server Error', details: error.message });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}