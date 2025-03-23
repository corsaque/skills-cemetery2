// filepath: /pages/api/skills/index.js
import { db } from '../../../lib/db'; // Assume a database connection utility

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { name, status, description, genai_impact } = req.body;

        // Validate inputs
        if (!name || !status || !description) {
            return res.status(400).json({ error: 'Missing required fields' });
        }

        // Insert into database
        try {
            const result = await db.skills.insert({
                name,
                status,
                description,
                genai_impact: genai_impact || false,
                submission_date: new Date(),
                approval_status: 'pending',
                votes_count: 0,
            });
            return res.status(201).json(result);
        } catch (error) {
            return res.status(500).json({ error: 'Database error' });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}