export async function fetchNews({ topic, pageSize = 6 }) {
  try {
    const response = await fetch(
      `https://newsapi.org/v2/everything?q=${topic}&apiKey=5a29c60dd2b9444884c083e313b2a8ce&pageSize=${pageSize}`
    );
    const data = await response.json();
    return data.articles;
  } catch (error) {
    return [];
  }
}
