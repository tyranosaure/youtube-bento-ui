'use client'
import { Block, SidebarLink, SidebarAccount, Separator, Title } from '@/components/sidebar/elements'
import Card from '@/components/video/card'

// Main icons
import HomeIcon from '@/assets/icons/Home.svg'
import ShortsIcon from '@/assets/icons/Youtube short.svg'
import SubscriptionsIcon from '@/assets/icons/Youtube abonnement.svg'
import YoutubeMusicIcon from '@/assets/icons/Youtube music.svg'
import YourAccountIcon from '@/assets/icons/User-square-2.svg'
import HistoryIcon from '@/assets/icons/History.svg'
import YourVideosIcon from '@/assets/icons/Youtube.svg'
import WatchLaterIcon from '@/assets/icons/Timer-reset.svg'
import DownloadsIcon from '@/assets/icons/Download-cloud.svg'
import ShowMoreIcon from '@/assets/icons/Chevron-down.svg'
import ShortContainer from '@/components/video/short'

// Subscriptions pictures
import Fouloscopie from '@/assets/fake-accounts/Fouloscopie.png'
import GMilgram from '@/assets/fake-accounts/G-Milgram.png'
import McFlyEtCarlito from '@/assets/fake-accounts/McFly-et-Carlito.png'
import PepperpotTeam from '@/assets/fake-accounts/Pepperpot-Team.png'
import SirGibsy from '@/assets/fake-accounts/Sir-Gibsy.png'
import Squeezie from '@/assets/fake-accounts/SQUEEZIE.png'
import TalesFromTheClick from '@/assets/fake-accounts/Tales-From-The-Click.png'
import TheSciencoder from '@/assets/fake-accounts/The-Sciencoder.png'
import Underscore from '@/assets/fake-accounts/Underscore_.png'
import VileBrequin from '@/assets/fake-accounts/Vilebrequin.png'
import WtfUx from '@/assets/fake-accounts/WTF-UX.png'
import Inoxtag from '@/assets/fake-accounts/Inoxtag.png'
import Jdg from '@/assets/fake-accounts/Jdg.png'

// Explorer icons
import TrendingIcon from '@/assets/icons/Star.svg'
import MusicIcon from '@/assets/icons/Music.svg'
import FilmsIcon from '@/assets/icons/Film.svg'
import LiveIcon from '@/assets/icons/Nfc.svg'
import GamingIcon from '@/assets/icons/Gamepad-2.svg'
import ActualitesIcon from '@/assets/icons/Newspaper.svg'
import SportIcon from '@/assets/icons/Mountain-snow.svg'
import KnowledgeIcon from '@/assets/icons/Lightbulb.svg'
import ModeIcon from '@/assets/icons/Glasses.svg'
import Podcasts from '@/assets/icons/Mic.svg'

// Other content icons
import YoutubePremiumIcon from '@/assets/icons/Youtube.svg'

// Card Videos
import InoxtagVideo from '@/assets/fake-videos/InoxtagVideo.png'
import JdgVideo from '@/assets/fake-videos/Jdgvideo.png'

// Short Videos
import Short1 from '@/assets/fake-videos/short-1.png'
import CategoriesContainer from '@/components/categories/categories'
import fetcher from '@/lib/fetcher'
import useSWR from 'swr'

export default function Home() {
	const { data, error } = useSWR('/api', fetcher)

	if (error) {
		console.log(error)
	}

	if (data) {
		console.log(data.items.length)
	} else {
		console.log('loading...')
	}

	const Videos =
		data?.items?.length > 0
			? data?.items?.map((video) => {
					console.log(video)
					return {
						id: video.id,
						title: video.snippet.title,
						duration: video.contentDetails.duration,
						picture: video.snippet.thumbnails.high.url,
						// accountPicture: video.snippet.channelThumbnails.default?.url,
						accountName: video.snippet.channelTitle,
						views: video.statistics.viewCount,
						date: video.snippet.publishedAt,
					}
			  })
			: Array(15)
					.fill(null)
					.map((video, index) => {
						return {
							id: index,
							title: 'No data found',
							duration: '0:00',
							picture: InoxtagVideo,
							accountPicture: Inoxtag,
							accountName: 'No data found',
							views: 0,
							date: new Date(2021, 7, 1),
						}
					})

	const MainBlock = [
		[
			{ label: 'Accueil', href: '/', icon: HomeIcon, active: true },
			{ label: 'Shorts', href: '/trending', icon: ShortsIcon },
			{ label: 'Abonnements', href: '/subscriptions', icon: SubscriptionsIcon },
			{ label: 'Youtube music', href: '/youtube-music', icon: YoutubeMusicIcon },
		].map((link) => SidebarLink(link)),
		Separator('Vous'),
		[
			{ label: 'Votre chaine', href: '/your-account', icon: YourAccountIcon },
			{ label: 'Historique', href: '/history', icon: HistoryIcon },
			{ label: 'Vos vidéos', href: '/your-videos', icon: YourVideosIcon },
			{ label: 'À regarder plus tard', href: '/watch-later', icon: WatchLaterIcon },
			{ label: 'Téléchargements', href: '/downloads', icon: DownloadsIcon },
			{ label: 'Plus', href: '/playlists', icon: ShowMoreIcon },
		].map((link) => SidebarLink(link)),
	]

	const SubscriptionsBlock = [
		Title('Abonnements'),
		[
			{ label: 'SQUEEZIE', href: '/account/SQUEEZIE', icon: Squeezie },
			{ label: 'McFly et Carlito', href: '/account/McFly-et-Carlito', icon: McFlyEtCarlito },
			{ label: 'Pepperpot Team', href: '/account/Pepperpot-Team', icon: PepperpotTeam },
			{ label: 'Sir Gibsy', href: '/account/Sir-Gibsy', icon: SirGibsy },
			{ label: 'Vilebrequin', href: '/account/Vilebrequin', icon: VileBrequin },
			{ label: 'Fouloscopie', href: '/account/Fouloscopie', icon: Fouloscopie },
			{ label: 'G Milgram', href: '/account/G-Milgram', icon: GMilgram },
			{ label: 'The Sciencoder', href: '/account/The-Sciencoder', icon: TheSciencoder },
			{ label: 'Underscore_', href: '/account/Underscore_', icon: Underscore },
			{ label: "WTF'UX", href: '/account/WTF-UX', icon: WtfUx },
			{ label: 'Tales From The Click', href: '/account/Tales-From-The-Click', icon: TalesFromTheClick },
		].map((link) => SidebarAccount(link)),
		SidebarLink({ label: 'Plus', href: '/playlists', icon: ShowMoreIcon }),
	]

	const ExploreBlock = [
		Title('Explorer'),
		[
			{ label: 'Tendances', href: '/', icon: TrendingIcon },
			{ label: 'Music', href: '/trending', icon: MusicIcon },
			{ label: 'Films et séries TV', href: '/subscriptions', icon: FilmsIcon },
			{ label: 'Direct', href: '/youtube-music', icon: LiveIcon },
			{ label: 'Jeux vidéo', href: '/', icon: GamingIcon },
			{ label: 'Actualités', href: '/trending', icon: ActualitesIcon },
			{ label: 'Sport', href: '/subscriptions', icon: SportIcon },
			{ label: 'Savoirs & Cultures', href: '/youtube-music', icon: KnowledgeIcon },
			{ label: 'Mode et beauté', href: '/subscriptions', icon: ModeIcon },
			{ label: 'Podcasts', href: '/youtube-music', icon: Podcasts },
		].map((link) => SidebarLink(link)),
	]

	const OtherContentBlock = [
		Title('Autres contenus Youtube'),
		[
			{ label: 'Youtube Premium', href: '/', icon: YoutubePremiumIcon },
			{ label: 'Youtube Music', href: '/trending', icon: YoutubeMusicIcon },
			{ label: 'Youtube Kids', href: '/subscriptions', icon: YoutubePremiumIcon },
		].map((link) => SidebarLink(link)),
	]

	const Shorts = [
		{ title: '😏 Le meilleur prank ?', vues: 87000, miniature: Short1 },
		{ title: '😏 Le meilleur prank ?', vues: 87000, miniature: Short1 },
		{ title: '😏 Le meilleur prank ?', vues: 87000, miniature: Short1 },
		{ title: '😏 Le meilleur prank ?', vues: 87000, miniature: Short1 },
		{ title: '😏 Le meilleur prank ?', vues: 87000, miniature: Short1 },
		{ title: '😏 Le meilleur prank ?', vues: 87000, miniature: Short1 },
		{ title: '😏 Le meilleur prank ?', vues: 87000, miniature: Short1 },
		{ title: '😏 Le meilleur prank ?', vues: 87000, miniature: Short1 },
		{ title: '😏 Le meilleur prank ?', vues: 87000, miniature: Short1 },
	]

	const Categories = [
		{ label: 'Tout', href: '/trending', active: true },
		{ label: 'Musique', href: '/music' },
		{ label: 'Gaming', href: '/gaming' },
		{ label: 'Films', href: '/films' },
		{ label: 'Actualités', href: '/actualites' },
		{ label: 'En direct', href: '/live' },
		{ label: 'Vidéos 360', href: '/360' },
		{ label: 'Vidéos 4K', href: '/4k' },
		{ label: 'Parcourir les chaînes', href: '/channels' },
		{ label: 'Films', href: '/films' },
		{ label: 'Actualités', href: '/actualites' },
		{ label: 'En direct', href: '/live' },
		{ label: 'Vidéos 360', href: '/360' },
		{ label: 'Vidéos 4K', href: '/4k' },
		{ label: 'Parcourir les chaînes', href: '/channels' },
	]

	return (
		<main className='grid items-stretch justify-stretch gap-6 mb-6 text-sm auto-cols-fr grid-rows-[250px_250px_400px_auto]'>
			<Block gridPosition='col-start-1 col-end-2 row-start-1 row-end-3'>{MainBlock.map((item) => item)}</Block>
			<Block gridPosition='col-start-4 col-end-5 row-start-2 row-end-4'>{SubscriptionsBlock.map((item) => item)}</Block>
			<Block gridPosition='col-start-4 col-end-5 row-start-5 row-end-7'>{ExploreBlock.map((item) => item)}</Block>
			<Block gridPosition='col-start-1 col-end-2 row-start-6 row-end-7'>{OtherContentBlock.map((item) => item)}</Block>
			<ShortContainer
				gridPosition='col-start-1 col-end-4 row-start-3 row-end-4'
				shorts={Shorts}
			/>
			<CategoriesContainer
				gridPosition='col-start-1 col-end-5 row-start-4 row-end-5'
				Categories={Categories}
			/>
			{Videos.map((video) => {
				return (
					<Card
						key={video.id}
						title={video.title}
						duration={video.duration}
						picture={video.picture}
						accountPicture={video.accountPicture}
						accountName={video.accountName}
						views={video.views}
						date={video.date}
					/>
				)
			})}
		</main>
	)
}
