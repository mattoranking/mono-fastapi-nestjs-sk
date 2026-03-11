const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";

interface Client {
  id: string;
  name: string;
  email: string;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

interface PaginatedResponse<T> {
  items: T[];
  total: number;
  page: number;
  size: number;
}

export async function fetchClients(
  page = 1,
  size = 10,
): Promise<PaginatedResponse<Client>> {
  const res = await fetch(
    `${API_BASE_URL}/v1/clients/?page=${page}&size=${size}`,
  );
  if (!res.ok) throw new Error("Failed to fetch clients");
  return res.json();
}

export async function fetchClient(id: string): Promise<Client> {
  const res = await fetch(`${API_BASE_URL}/v1/clients/${id}`);
  if (!res.ok) throw new Error("Failed to fetch client");
  return res.json();
}

export async function checkHealth(): Promise<{ status: string }> {
  const res = await fetch(`${API_BASE_URL}/health`);
  if (!res.ok) throw new Error("Backend unhealthy");
  return res.json();
}
