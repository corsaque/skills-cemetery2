import { supabase } from '@/app/lib/supabase';

export default async function handler(req, res) {
  try {
    const { data: deadSkills, error: deadError } = await supabase
      .from('skills')
      .select('id')
      .eq('status', 'dead')
      .eq('approval_status', 'approved');

    const { data: dyingSkills, error: dyingError } = await supabase
      .from('skills')
      .select('id')
      .eq('status', 'dying')
      .eq('approval_status', 'approved');

    const { data: resurrectedSkills, error: resurrectedError } = await supabase
      .from('skills')
      .select('id')
      .eq('status', 'resurrected')
      .eq('approval_status', 'approved');

    if (deadError || dyingError || resurrectedError) {
      throw new Error('Error fetching statistics');
    }

    res.status(200).json({
      dead: deadSkills.length,
      dying: dyingSkills.length,
      resurrected: resurrectedSkills.length,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}