import React from 'react'
import './infobox.css'

function LoveBook(props) {
	let name = props.name,
		img = props.img,
		author = props.author,
		engName = props.engName,
		janre = props.janre,
		janreLink = props.janreLink,
		recense1 = props.recense1,
		recense2 = props.recense2,
		recense3 = props.recense3,
		pages = props.pages

	return (
		<aside role={'region'} className={'portable-infobox pi-background pi-border-color pi-theme-anime pi-layout-default'}>
			<h2 className={'pi-item pi-item-spacing pi-title pi-secondary-background'} data-source={'name'}>{name}</h2>
			<figure className={'pi-item pi-image'} data-source={'img'}>
				<a href={img} className={'image image-thumbnail'}>
					<img src={img} className={'pi-image-thumbnail'} alt={''} width={'270'} height={204} data-image-key={engName} data-image-name={engName} />
				</a>
			</figure>
			<nav className={'pi-navigation pi-item-spacing pi-secondary-font'}>{engName}</nav>
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
						<a href={janreLink.first} className={''}>{janre.first}</a>{janre.second ? ', ' : ''}{janre.second ? <a href={janreLink.second} className={''}>{janre.second}</a> : ''}
					</div>
				</div>
				<div className={'pi-item pi-data pi-item-spacing pi-border-color'} data-source={'author'}>
					<h3 className={'pi-data-label pi-secondary-font'}>Кол-во страниц</h3>
					<div className={'pi-data-value pi-font'}>
						{pages}
					</div>
				</div>
			</section>
			<section className={'pi-item pi-group pi-border-color'}>
				<h2>Рецензии</h2>
				<div className={'pi-item pi-data pi-item-spacing pi-border-color'} data-source={'author'}>
					<h3 className={'pi-data-label pi-secondary-font'}>Рецензии 1</h3>
					<div className={'pi-data-value pi-font'}>
						{recense1}
					</div>
				</div>
				<div className={'pi-item pi-data pi-item-spacing pi-border-color'} data-source={'author'}>
					<h3 className={'pi-data-label pi-secondary-font'}>Рецензии 2</h3>
					<div className={'pi-data-value pi-font'}>
						{recense2}
					</div>
				</div>
				<div className={'pi-item pi-data pi-item-spacing pi-border-color'} data-source={'author'}>
					<h3 className={'pi-data-label pi-secondary-font'}>Рецензии 3</h3>
					<div className={'pi-data-value pi-font'}>
						{recense3}
					</div>
				</div>
			</section>
		</aside>
	)
}

export default LoveBook