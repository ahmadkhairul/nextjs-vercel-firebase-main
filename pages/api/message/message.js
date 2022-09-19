import db from '../../../lib/firebase';

export default async (req, res) => {
  try {
    const entries = await db.collection('messages').orderBy('created', 'desc').get();
    const entriesData = entries.docs.map(entry => ({
      id: entry.id,
      ...entry.data()
    }));
    res.status(200).json({ entriesData });
  } catch (e) {
    res.status(400).end();
  }
}