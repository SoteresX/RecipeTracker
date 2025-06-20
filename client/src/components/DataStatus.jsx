function DataStatus({ isLoading, error, data, emptyMessage }) {
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading data.</div>;
  if (!data || data.length === 0) return <div>{emptyMessage || 'No data found.'}</div>;
  return null;
}

export default DataStatus;