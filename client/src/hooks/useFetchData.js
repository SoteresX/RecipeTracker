import { useQuery } from "@tanstack/react-query";

function useFetchData({ queryKey, endpoint, params }) {
  console.log('useFetchData called with:', { queryKey, endpoint, params });
  return useQuery({
    queryKey: [queryKey, params],
    queryFn: async () => {
      const url = new URL(`http://localhost:5000${endpoint}`);
      if (params) {
        Object.entries(params).forEach(([key, value]) =>
          url.searchParams.append(key, value)
        );
      }
      
      const res = await fetch(url);
      if (!res.ok) throw new Error('Network response was not ok');
      return res.json();
    },
  });
}

export default useFetchData;