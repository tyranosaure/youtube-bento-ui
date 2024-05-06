export async function GET() {
	var api_key = process.env.YOUTUBE_API_KEY

	const res = await fetch(
		`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=15&regionCode=FR&key=${api_key}`,
		{
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
			},
		}
	)
	const data = await res.json()
	return Response.json(data)
}
