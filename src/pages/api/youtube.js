export async function GET(req, res) {
	// var api_key = process.env.YOUTUBE_API_KEY

	// await fetch(
	// 	`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=15&regionCode=FR&key=${api_key}`
	// )
	// 	.then((res) => res.json())
	// 	.then((data) => {
	// 		return Response.json({ data })
	// 	})
	// 	.catch((err) => console.log(err))
	console.log('test')
	Response.json({ data: 'test' })
}
