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
            return res.status(400).json({ error: 'Missing required fields' });
        }

        // Insert into database
        try {
            const { data, error } = await supabase.from('skills').insert([
                {
                    name,
                    status,
                    description,
                    genai_impact: genai_impact || false,
                    created_at: new Date(),
                },
            ]);

            if (error) throw error;

            return res.status(201).json(data);
        } catch (error) {
            return res.status(500).json({ error: 'Database error', details: error.message });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}