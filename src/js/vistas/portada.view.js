export default () => {
	return `
		<header class="portada-header">
			<div class="portada-header_cnt container-content_slide">
				<div class="portada-header_logoLeft">
					<img src="./img/logo.png" />
				</div>
				<div class="portada-header_logoRight">
					<img src="./img/gestion-talento.png" />
				</div>
			</div>
		</header>
		<section class="portada-content container-content_slide">
			<div class="portada-content_div1">
				<div class="portada-content_div1-left">
					<p class="portada-content_div1-left_textLarge animate__animated animate__backInLeft animate__delay-2s">ACTÍ</p>
					<p class="portada-content_div1-left_textSmall animate__animated animate__backInLeft animate__delay-2s">EXTREMIDADES</p>
				</div>
				<img src="./img/svg/portadaMujer.svg" class="portada-content_imgCenter animate__animated animate__fadeInDown animate__delay-1s" />
				<div class="portada-content_div2-left">
					<p class="portada-content_div2-left_textLarge animate__animated animate__backInRight animate__delay-3s">VATE</p>
					<p class="portada-content_div2-left_textSmall animate__animated animate__backInRight animate__delay-3s">INFERIORES</p>
				</div>
			</div>
			<div class="portada-content_div2">
				<p class="portada-content_div2-text animate__animated animate__backInUp animate__delay-4s">EQUIPO DE SEGURIDAD, SALUD EN EL TRABAJO<br/>Y AMBIENTE</p>
			</div>
		</section>
	`;
}