import { supabase } from "../config/supabaseClient.js";

export const ItemModel = {
  async create(payload) {
    const { data, error } = await supabase
      .from("items")
      .insert([payload])
      .select()
      .single();
    if (error) throw error;
    return data;
  },

  async getAll(filters = {}) {
    let query = supabase.from("items").select("*").order("created_at", { ascending: false });

    if (filters.status) {
      query = query.eq("status", filters.status);
    }

    if (filters.owner) {
      query = query.ilike("owner", `%${filters.owner}%`);
    }

    const { data, error } = await query;
    if (error) throw error;
    return data;
  },

  async getById(id) {
    const { data, error } = await supabase.from("items").select("*").eq("id", id).single();
    if (error) throw error;
    return data;
  },

  async update(id, payload) {
    const { data, error } = await supabase
      .from("items")
      .update(payload)
      .eq("id", id)
      .select()
      .single();
    if (error) throw error;
    return data;
  },

  async remove(id) {
    const { error } = await supabase.from("items").delete().eq("id", id);
    if (error) throw error;
    return { success: true };
  },
};
