<!-- Header -->
<?php get_header() ?>

<!-- Main Content -->
<?php 
	if( have_posts() ) {
		while( have_posts() ) { 
			the_post();
			get_template_part( 'template-parts/content', '' );
		}
	}
	else {
		get_template_part( 'template-parts/content', 'none' );
	}
?>

<!-- Footer -->
<?php get_footer() ?>