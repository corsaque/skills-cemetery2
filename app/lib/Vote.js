// filepath: /pages/api/skills/[id]/vote.js
import { db } from '../../../../lib/db';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { id } = req.query;
        const { vote_type } = req.body;

        if (!id || !vote_type) {
            return res.status(400).json({ error: 'Missing required fields' });
        }

        try {
            // Increment vote count
            await db.votes.insert({
                skill_id: id,
                vote_type,
                timestamp: new Date(),
            });
            await db.skills.incrementVoteCount(id);
            return res.status(200).json({ message: 'Vote recorded' });
        } catch (error) {
            return res.status(500).json({ error: 'Database error' });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}