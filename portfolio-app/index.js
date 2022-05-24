#!/usr/bin/env node

`use strict` ;

const display = ( () =>
	{
		switch ( localStorage . getItem ( `portfolio-app-theme` ) )
		{
			case ( `dark-mode` ) :
				theme ( `dark-mode` ) ;
				break ;
			default :
				theme ( `light-mode` ) ;
				break ;
		}
		document . querySelectorAll ( `#theme-options` ) . forEach ( ( theme_option ) =>
			{
				theme_option . addEventListener ( `click` , theme ) ;
				return ;
			}
		) ;
		return ;
	}
) ;

const theme = ( ( event ) =>
	{
		const user_theme = ( event . target ) ? ( event . target . id ) : ( event ) ;
		const classes = [ `body` , `main-container` , `header` , `container-wrapper-one` , `navigation-wrapper` , `navigation-links` , `profile-picture` , `overview-shadow` , `overview` , `paragraphs` , `form` , `label` , `input` , `submit` , `theme-note` , `theme-option` ] ;
		switch ( user_theme )
		{
			case ( `dark-mode` ) :
				classes . map ( ( one_class ) =>
					{
						document . querySelectorAll ( `.${ one_class }` ) . forEach ( ( element ) =>
							{
								element . classList . add ( `${ one_class }-dark` ) ;
								return ;
							}
						) ;
						return ;
					}
				) ;
				localStorage . setItem ( `portfolio-app-theme` , `dark-mode` ) ;
				break ;
			default :
				classes . map ( ( one_class ) =>
					{
						document . querySelectorAll ( `.${ one_class }` ) . forEach ( ( element ) =>
							{
								element . classList . remove ( `${ one_class }-dark` ) ;
								return ;
							}
						) ;
						return ;
					}
				) ;
				localStorage . setItem ( `portfolio-app-theme` , `light-mode` ) ;
				break ;
		}
		return ;
	}
) ;

display () ;
