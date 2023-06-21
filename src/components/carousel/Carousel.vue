<script>
import Slide from './SlideImageTitleLink.vue'

export default {
    components: {
        Slide
    },
    props: {
        slidesContent: {
            type: Object
        },
        projectId: {
            type: String
        } 
    },
    data() {
        return {
            scrollingSpeed: 2500,
            currentSlide: 0,
            intervalId: 0,
            // isInfinite: false,
            isInfinite: true,
            nbSlidesVisibleMax: 3,
            isNav: false
        }
    },
    mounted() {
        this.scroll()
        this.setContainerAndSlidesWidth()
        this.startOnFirstSlideToShow()

        if (!this.isInfinite)
            this.hidePrevButtonElt()
    },
    computed: {
        nbSlidesToDuplicate() {
            /* j'ai choisi de dupliquer toujours le même nb de diapo pour que la gestion du défilement 
            soit identique quelque soit le nb de diapo affiché au niveau du carousel */
            return this.nbSlidesVisibleMax - 1 
        },
        indexFirstSlideToShow() {
            if (this.isInfinite)
                return this.nbSlidesToDuplicate
            else
                return 0  
        },
        containerObject() {
            return document.getElementById('slides_container')
        },
        containerWidth() {
            return this.slidesCurrentTotal * 100
        },
        slidesElts() {
            return this.containerObject.children
        },
        slideWidth() {
            return 100 / this.slidesCurrentTotal / this.nbSlidesVisible
        },
        slidesCurrentTotal() {
            return this.currentContent.length 
        },
        slidesTotal() {
            return this.slidesContent.length
        },
        currentContent() {
            if (this.isInfinite)
                return this.slidesContentInfinite
            else
                return this.slidesContent  
        },
        slidesContentInfinite() {
            const indexToSlice = this.slidesTotal - this.nbSlidesToDuplicate
            const slidesToAddBefore = this.slidesContent.slice(indexToSlice)
            const slidesToAddAfter = this.slidesContent.slice(0, this.nbSlidesToDuplicate)
            const slidesContentInfinite = slidesToAddBefore.concat(this.slidesContent).concat(slidesToAddAfter)
            return slidesContentInfinite
        },
        nbSlidesVisible() {
            let nbSlidesVisible = this.nbSlidesVisibleMax
            const windowInnerWidth = window.innerWidth
            if (windowInnerWidth < 1000 && windowInnerWidth > 700)
                nbSlidesVisible = 2
            else if (windowInnerWidth < 700) 
                nbSlidesVisible = 1
            return nbSlidesVisible;
        },
        prevButtonElt() {
            return document.getElementById('carousel-prev')
        },
        nextButtonElt() {
            return document.getElementById('carousel-next')
        },

        carouselNavWidth() {
            const windowInnerWidth = this.getWindowInnerWidth
            let carouselNavWidth = 100

            if (windowInnerWidth < 1000) {
                carouselNavWidth = (windowInnerWidth - windowInnerWidth * 10/100)
                return carouselNavWidth + 'px'; 
            } else {
                return carouselNavWidth + '%';
            }
        },
        carouselNavLeftAndRight() {
            const windowInnerWidth = this.getWindowInnerWidth
            let carouselNavLeftAndRight = 0
            const carouselNavWidth = this.carouselNavWidth.replace('px', '')

            if (windowInnerWidth < 1000) {
                carouselNavLeftAndRight = - (carouselNavWidth - 100) / 2
                return carouselNavLeftAndRight + 'px'; 
            } else {
                return carouselNavLeftAndRight + '%';
            }
        },
        getWindowInnerWidth() {
            return window.innerWidth
        },
        progressBarNbItems() {
            return this.slidesContent.length - (this.nbSlidesVisible - 1)
        },
       
    },
    
    methods: {
        isProgressBarItemActive(index) {
            if (this.isInfinite) {
                const normalSlideIndex = this.currentSlide - this.nbSlidesToDuplicate
                const duplicateSlideRightIndexToNormalIndex = this.currentSlide + this.progressBarNbItems - this.nbSlidesToDuplicate
                const duplicateSlideLeftIndexToNormalIndex = this.currentSlide + this.progressBarNbItems + this.nbSlidesToDuplicate
                // return index == normalSlideIndex || index == duplicateSlideRightIndexToNormalIndex || index == duplicateSlideLeftIndexToNormalIndex
                return index == normalSlideIndex || index == duplicateSlideRightIndexToNormalIndex
            }
            else 
                return index == this.currentSlide  
        },
        setContainerAndSlidesWidth() {
            this.setContainerWidth();
            this.setSlidesWidth();
        },
        setContainerWidth() {
            this.containerObject.style.width = this.containerWidth + '%' 
        },
        setSlidesWidth() {
            for (let slideElt of this.slidesElts) {
                slideElt.style.width = `${this.slideWidth}%`; 
            }
        },
        startOnFirstSlideToShow() {
            this.moveCarouselToIndexSlide(this.indexFirstSlideToShow)
            this.currentSlide = this.indexFirstSlideToShow
        },
        moveCarouselToLeft() {
            this.showNextButtonElt()
    
            const indexLastSlideToShowWithInfinite = this.indexFirstSlideToShow 
            if (this.isInfinite && this.currentSlide === indexLastSlideToShowWithInfinite) { 
                const indexToMoveTo = this.slidesCurrentTotal - this.nbSlidesToDuplicate
                this.moveCarouselToIndexSlide(indexToMoveTo, false);
            } 
        
            const indexSlide = this.currentSlide - 1;
            this.moveCarouselToIndexSlide(indexSlide);

            if (!this.isInfinite && this.currentSlide === 0)
                this.hidePrevButtonElt()
        },
        moveCarouselToRight() {
            if (!this.isInfinite)
                this.showPrevButtonElt()

            const indexLastSlideToShowWithInfinite = this.slidesTotal
            if (this.isInfinite && (this.currentSlide === indexLastSlideToShowWithInfinite)) {
                const indexToMoveTo = 0
                this.moveCarouselToIndexSlide(indexToMoveTo, false);
            }
            
            const indexSlide = this.currentSlide + 1
            this.moveCarouselToIndexSlide(indexSlide)

            const indexLastSlideToShow = this.slidesTotal - this.nbSlidesVisible
            if (!this.isInfinite && this.currentSlide === indexLastSlideToShow) {
                this.hideNextButtonElt()
            }
        },
        moveCarouselToIndexSlide(indexSlide, animation = true) {
            const nbOfSlidesBeforeSlideToShow = indexSlide
            const translationWidth = this.slideWidth * nbOfSlidesBeforeSlideToShow
            if (!animation)
                this.removeAnimationOnCarouselMove()
            
            this.containerObject.style.transform = `translateX(-${translationWidth}%)`
            
            if (!animation)
                this.resetAnimationOnCarouselMove()

            this.currentSlide = indexSlide
        },
        scroll() {
            this.intervalId = setInterval(this.moveCarouselToRight.bind(this), this.scrollingSpeed);
        },
        stopScrolling() {
            clearInterval(this.intervalId);
        },
        hidePrevButtonElt() {
            this.prevButtonElt.style.display = 'none'
        },
        showPrevButtonElt() {
            this.prevButtonElt.style.display = 'block'
        },
        hideNextButtonElt() {
            this.nextButtonElt.style.display = 'none'
        },
        showNextButtonElt() {
            this.nextButtonElt.style.display = 'block'
        },
        removeAnimationOnCarouselMove() {
            this.containerObject.style.transition = 'none'
        },
        resetAnimationOnCarouselMove() {
            this.containerObject.offsetHeight // force le repaint pour pouvoir MAJ la transition
            this.containerObject.style.transition = ''
        },
    },

}
</script>

<template>
    <div class="carousel_container">
        <div id="carousel">
            <div id="slides_container">
                <Slide v-for="(content, index) in currentContent" :content="content" :index="index" :currentSlide="currentSlide" :projectId="projectId"></Slide>
            </div>
            <div class="carousel_progressbar">
                <div v-for="(slide, index) in progressBarNbItems" class="progress_item" :class="{ active: isProgressBarItemActive(index)}"></div>
            </div>
        </div>
        
        <div v-if="this.isNav" class="carousel_nav" :style="{width: carouselNavWidth, left: carouselNavLeftAndRight, right: carouselNavLeftAndRight }">
            <button class="button-nav" id="carousel-prev" @click="moveCarouselToLeft"><i class="fas fa-solid fa-chevron-left"></i></button>
            <button class="button-nav" id="carousel-next" @click="moveCarouselToRight"><i class="fas fa-solid fa-chevron-right"></i></button>
        </div>
    
    </div>
</template>


<style scoped>
.carousel_container {  /* carousel_container permet de mettre les boutons de la nav sur les côtés */
    position: relative;
    width: 100%;
}

#carousel {
    position: relative;
    width: 90%;

    margin: 0px auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: inherit;
    overflow-x: hidden;
}

#slides_container {
    display: flex;
    align-items: center;
    transition: all 1s;
    transform: translateX(0px); /* par défaut : pas de translation du conteneur */
}

/* navigation */
.carousel_nav {
    display: flex;
    flex-direction: row;

    margin: 0px auto;

    /* gestion dynamique de la largeur de la navigation du carousel : width, left et right */
    position: absolute;
    top: 50%;

    transform: translateY(-25px); /* 2*25px = hauteur de la progress bar => pour center sur slides_container et pas sur #carousel (contient slides-container + progressbar) */
}

.button-nav {
    width: 36px;
    height: 36px;
    border: none;
    border-radius: 25px;
    background-color: var(--background-card-light);
}

.button-nav:hover {
    opacity: 0.8;
}

.button-nav i {
    font-size: 1rem;
    color: white;
}

#carousel-prev {
    position: absolute;
    left: 0;
    transform: translateY(-50%);
}

#carousel-next {
    position: absolute;
    right: 0;
    transform: translateY(-50%);
}

/* progress bar */
.carousel_progressbar {
    display: flex;
    justify-content: center;
    padding: 15px;
}

.progress_item {
    border-radius: 25px;
    width: 20px;
    height: 20px;
    background-color: var(--background-card-light);
    margin: 0px 5px;
}

.active {
    background-color: white;
}
</style>