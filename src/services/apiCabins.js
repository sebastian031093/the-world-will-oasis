import supabase from './supabase';

export async function getCabins() {
  try {
    let { data, error } = await supabase.from('cabins').select('*');

    if (error) throw new Error('Cabins could be no be loaded');

    return data;
  } catch (error) {
    console.log('error', error.message);
  }
}
