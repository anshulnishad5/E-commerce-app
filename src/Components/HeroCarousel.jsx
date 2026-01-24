import React, { useState, useEffect, useCallback } from 'react';
import './HeroCarousel.css';

export default function HeroCarousel ()
{
    const slides = [
        {
            image: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=1920&q=80",
            title: "UrbanWear",
            subtitle: "Modern clothing for everyday style",
        },
        {
            image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1920&q=80",
            title: "New Arrivals",
            subtitle: "Fresh styles every week",
        },
        {
            image: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=1920&q=80", 
            title: "Trending Now",
            subtitle: "Shop the latest trends",
        },
    ];

    const [ currentIndex, setCurrentIndex ] = useState( 0 );
    const [ isAnimating, setIsAnimating ] = useState( false );
    const [ direction, setDirection ] = useState( 'next' );

    const goToSlide = useCallback( ( index ) =>
    {
        if ( isAnimating ) return;
        setDirection( index > currentIndex ? 'next' : 'prev' );
        setIsAnimating( true );
        setCurrentIndex( index );
        setTimeout( () => setIsAnimating( false ), 600 );
    }, [ currentIndex, isAnimating ] );

    const nextSlide = useCallback( () =>
    {
        if ( isAnimating ) return;
        setDirection( 'next' );
        setIsAnimating( true );
        setCurrentIndex( ( prev ) => ( prev + 1 ) % slides.length );
        setTimeout( () => setIsAnimating( false ), 600 );
    }, [ isAnimating, slides.length ] );

    const prevSlide = useCallback( () =>
    {
        if ( isAnimating ) return;
        setDirection( 'prev' );
        setIsAnimating( true );
        setCurrentIndex( ( prev ) => ( prev - 1 + slides.length ) % slides.length );
        setTimeout( () => setIsAnimating( false ), 600 );
    }, [ isAnimating, slides.length ] );

    useEffect( () =>
    {
        const interval = setInterval( nextSlide, 5000 );
        return () => clearInterval( interval );
    }, [ nextSlide ] );

    const getSlideClass = ( index ) =>
    {
        const isActive = index === currentIndex;
        const isPrev = index === ( currentIndex - 1 + slides.length ) % slides.length;
        const isNext = index === ( currentIndex + 1 ) % slides.length;

        let classes = [ 'carousel-slide' ];

        if ( isActive )
        {
            classes.push( 'active' );
            if ( isAnimating )
            {
                classes.push( direction === 'next' ? 'slide-in-from-right' : 'slide-in-from-left' );
            }
        } else if ( isPrev )
        {
            classes.push( 'prev' );
            if ( isAnimating && direction === 'next' )
            {
                classes.push( 'slide-out-to-left' );
            }
        } else if ( isNext )
        {
            classes.push( 'next' );
            if ( isAnimating && direction === 'prev' )
            {
                classes.push( 'slide-out-to-right' );
            }
        } else
        {
            classes.push( 'hidden' );
        }

        return classes.join( ' ' );
    };

    return (
        <div className="carousel-container">
            <div className="carousel-wrapper">
                { slides.map( ( slide, index ) => (
                    <div key={ index } className={ getSlideClass( index ) }>
                        <img src={ slide.image } alt={ slide.title } className="carousel-image" />
                        <div className="carousel-overlay">
                            <div className="carousel-content">
                                <h1 className={ `carousel-title ${ index === currentIndex ? 'animate' : '' }` }>
                                    { slide.title }
                                </h1>
                                <p className={ `carousel-subtitle ${ index === currentIndex ? 'animate' : '' }` }>
                                    { slide.subtitle }
                                </p>
                                <button className={ `carousel-shop-button ${ index === currentIndex ? 'animate' : '' }` }>
                                    Shop Now
                                </button>
                            </div>
                        </div>
                    </div>
                ) ) }
            </div>

            <button
                onClick={ prevSlide }
                className="carousel-nav-button carousel-prev-button"
                disabled={ isAnimating }
            >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
            </button>

            <button
                onClick={ nextSlide }
                className="carousel-nav-button carousel-next-button"
                disabled={ isAnimating }
            >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
            </button>

            <div className="carousel-indicators">
                { slides.map( ( _, index ) => (
                    <button
                        key={ index }
                        onClick={ () => goToSlide( index ) }
                        className={ `carousel-indicator ${ index === currentIndex ? 'active' : '' }` }
                        disabled={ isAnimating }
                    />
                ) ) }
            </div>
        </div>
    );
}