import React from 'react'
import './infobox.css'

function Recipe() {
	return (
		<aside role={'region'} className={'portable-infobox pi-background pi-border-color pi-theme-anime pi-layout-default'}>
			<h2 className={'pi-item pi-item-spacing pi-title pi-secondary-background'} data-source={'name'}>Пирог с вареньем "Нежный"</h2>
			<figure className={'pi-item pi-image'} data-source={'img'}>
				<a href={'https://img1.russianfood.com/dycontent/images_upl/137/big_136904.jpg'} className={'image image-thumbnail'}>
					<img src={'https://img1.russianfood.com/dycontent/images_upl/137/big_136904.jpg'} className={'pi-image-thumbnail'} alt={''} width={'270'} height={204} />
				</a>
			</figure>
			<section className={'pi-item pi-group pi-border-color'}>
				<h2>Описание</h2>
				<div className={'pi-item pi-data pi-item-spacing pi-border-color'} data-source={'author'}>
					<h3 className={'pi-data-label pi-secondary-font'}>Кол-во порций</h3>
					<div className={'pi-data-value pi-font'}>8</div>
				</div>
				<div className={'pi-item pi-data pi-item-spacing pi-border-color'} data-source={'author'}>
					<h3 className={'pi-data-label pi-secondary-font'}>Время приготовления</h3>
					<div className={'pi-data-value pi-font'}>1 час</div>
				</div>
				<div className={'pi-item pi-data pi-item-spacing pi-border-color'} data-source={'author'}>
					<h3 className={'pi-data-label pi-secondary-font'}>Автор</h3>
					<div className={'pi-data-value pi-font'}>
						<a href={'https://www.russianfood.com/blogs/?id=27134'}>Svet_lana</a>
					</div>
				</div>
			</section>
			<section className={'pi-item pi-group pi-border-color'}>
				<h2>Продукты (на 8 порций)</h2>
				<div className={'pi-item pi-data pi-item-spacing pi-border-color'} data-source={'author'}>
					<h3 className={'pi-data-label pi-secondary-font'}>Яйца куриные</h3>
					<div className={'pi-data-value pi-font'}>3 шт. (если яйца мелкие, берем 4 шт.)</div>
				</div>
				<div className={'pi-item pi-data pi-item-spacing pi-border-color'} data-source={'author'}>
					<h3 className={'pi-data-label pi-secondary-font'}>Сахар</h3>
					<div className={'pi-data-value pi-font'}>0,5 стакана</div>
				</div>
				<div className={'pi-item pi-data pi-item-spacing pi-border-color'} data-source={'author'}>
					<h3 className={'pi-data-label pi-secondary-font'}>Варенье</h3>
					<div className={'pi-data-value pi-font'}>1 стакан</div>
				</div>
				<div className={'pi-item pi-data pi-item-spacing pi-border-color'} data-source={'author'}>
					<h3 className={'pi-data-label pi-secondary-font'}>Мука пшеничная</h3>
					<div className={'pi-data-value pi-font'}>1 стакан</div>
				</div>
				<div className={'pi-item pi-data pi-item-spacing pi-border-color'} data-source={'author'}>
					<h3 className={'pi-data-label pi-secondary-font'}>Разрыхлитель теста</h3>
					<div className={'pi-data-value pi-font'}>1 пакетик (11 г)</div>
				</div>
				<div className={'pi-item pi-data pi-item-spacing pi-border-color'} data-source={'author'}>
					<h3 className={'pi-data-label pi-secondary-font'}>Ванильный сахар</h3>
					<div className={'pi-data-value pi-font'}>1 пакетик (11 г)</div>
				</div>
			</section>
		</aside>
	)
}

export default Recipe