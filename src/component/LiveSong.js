import React from 'react'
import './infobox.css'

function LoveSong(props) {
	let name = props.name,
		img = props.img,
		author = props.author,
		janre = props.janre,
		albom = props.albom,
		albomLink = props.albomLink,
		dzap = props.dzap,
		dvyp = props.dvyp

	return (
		<aside role={'region'} className={'portable-infobox pi-background pi-border-color pi-theme-anime pi-layout-default'} style={{width: '400px'}}>
			<h2 className={'pi-item pi-item-spacing pi-title pi-secondary-background'} data-source={'name'}>{name}</h2>
			<figure className={'pi-item pi-image'} data-source={'img'}>
				<a href={img} className={'image image-thumbnail'}>
					<img src={img} className={'pi-image-thumbnail'} alt={''} width={'270'} height={204} data-image-key={name} data-image-name={name} />
				</a>
			</figure>
			<section className={'pi-item pi-group pi-border-color'}>
				<h2>Описание</h2>
				<div className={'pi-item pi-data pi-item-spacing pi-border-color'} data-source={'author'}>
					<h3 className={'pi-data-label pi-secondary-font'}>ФИО автора</h3>
					<div className={'pi-data-value pi-font'}>
						<i>{author.f}</i>, {author.io}
					</div>
				</div>
				<div className={'pi-item pi-data pi-item-spacing pi-border-color'} data-source={'author'}>
					<h3 className={'pi-data-label pi-secondary-font'}>Жанр книги</h3>
					<div className={'pi-data-value pi-font'}>
						<a href={'https://ru.wikipedia.ru/wiki/' + janre.one} className={''}>{janre.one}</a>
						{janre?.two ? <React.Fragment><br /><a href={'https://ru.wikipedia.ru/wiki/' + janre.two} className={''}>{janre.two}</a></React.Fragment> : ''}
						{janre?.three ? <React.Fragment><br /><a href={'https://ru.wikipedia.ru/wiki/' + janre.three} className={''}>{janre.three}</a></React.Fragment> : ''}
						{janre?.four ? <React.Fragment><br /><a href={'https://ru.wikipedia.ru/wiki/' + janre.four} className={''}>{janre.four}</a></React.Fragment> : ''}
						{janre?.five ? <React.Fragment><br /><a href={'https://ru.wikipedia.ru/wiki/' + janre.five} className={''}>{janre.five}</a></React.Fragment> : ''}
						{janre?.six ? <React.Fragment><br /><a href={'https://ru.wikipedia.ru/wiki/' + janre.six} className={''}>{janre.six}</a></React.Fragment> : ''}
					</div>
				</div>
				<div className={'pi-item pi-data pi-item-spacing pi-border-color'} data-source={'author'}>
					<h3 className={'pi-data-label pi-secondary-font'}>Альбом</h3>
					<div className={'pi-data-value pi-font'}>
						<a href={albomLink} className={''}>{albom}</a>
					</div>
				</div>
				<div className={'pi-item pi-data pi-item-spacing pi-border-color'} data-source={'author'}>
					<h3 className={'pi-data-label pi-secondary-font'}>Длительность</h3>
					<div className={'pi-data-value pi-font'}>
						{props.dlit}
					</div>
				</div>
				<div className={'pi-item pi-data pi-item-spacing pi-border-color'} data-source={'author'}>
					<h3 className={'pi-data-label pi-secondary-font'}>Дата выпуска</h3>
					<div className={'pi-data-value pi-font'}>
						{dvyp}
					</div>
				</div>
				<div className={'pi-item pi-data pi-item-spacing pi-border-color'} data-source={'author'}>
					<h3 className={'pi-data-label pi-secondary-font'}>Дата записи</h3>
					<div className={'pi-data-value pi-font'}>
						{dzap}
					</div>
				</div>
			</section>
		</aside>
	)
}

export default LoveSong