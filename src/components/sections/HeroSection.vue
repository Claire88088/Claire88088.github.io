<script setup>
</script>

<template>
    <section id="hero"> 
        <div id="headband">
            <div id="content">
                <h1><span id="prenom"><span id="c">C</span><span id="l">l</span><span id="a">a</span><span
                            id="i">i</span><span id="r">r</span><span id="e">e</span></span> <span id="nom"><span
                            id="b">B</span><span id="o">o</span><span id="u">u</span><span id="t">t</span><span
                            id="o-2">o</span><span id="n">n</span></span></h1>
                <h2 class="hero_subtitle">Développeuse web</h2>
                <h3>Portfolio</h3>
                <a id="contact-btn" href="mailto:claire_bouton@hotmail.com?subject=demande%20de%20contact"><span
                        id="contact-btn_content">Contactez-moi !</span></a>
            </div>
        </div>
    </section>
</template>

<style scoped>
#hero {
    background: url("../../assets/images/fond3.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    height: 1000px;
    padding: 0;
}

#headband {
    background:rgba(9, 29, 43, 0.5);
    /* margin-top: 20%; */
    position: relative;
    top: 20%;
}

h1 {
    font-family: 'lemonchi', cursive;
    font-size: 2.5rem;
    font-weight: 700;
    color: rgb(43, 161, 179);
}

.hero_subtitle, 
#headband h3 {
    color: rgb(239, 244, 245);
    margin-bottom: 20px;
    font-weight: 100;
}

#content {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 50px 0;
}

#prenom, 
#nom {
    display: inline-block;
}

#contact-btn {
    color: rgb(43, 161, 179);
    border: solid 1px rgb(43, 161, 179);
    border-radius: 15px;
    padding: 10px 15px;
    transition: 50ms;
}

#contact-btn:hover {
    opacity: 1;
    color: rgb(239, 244, 245);
    background-color: rgb(43, 161, 179);
}

/* définition des animations */
@keyframes appear {
    0% {
        /* color: #002354; */
        transform: scale(0);  
    }

    50% {
        color: #a9c5ca;
        transform: scale(1.2);
    }

    100% {
        color: #2ba1b3;
        transform: scale(1);
    }
}

@keyframes appear-contact {
    0% {
        /* color: #002354; */
        transform: scale(0);  
    }

    45% {
        color: #a9c5ca;
        transform: scale(1.5);
    }

    75% {
        color: #2ba1b3;
        transform: scale(0.7);
    }

    100% {
        /* color: #2ba1b3; */
        transform: scale(1);
    }
}

@keyframes bigger {
    0% {
        /* color: #002354; */
    }

    25% {
        transform: scale(2);
    }

    50% {
        transform: scale(0.8);
        color: #a9c5ca;
    }

    75% {
        transform: scale(1.2);
    }

    100% {
        transform: scale(1);
        color: #2ba1b3;
    }
}


/** animations du hero**/
/* #b, #i, #e, #n, #v, #e-2, #n-2, #u, #e-3  */
#c, #l, #a, #i, #r, #e, #b, #o, #u, #t, #o-2, #n, #contact-btn, #contact-btn_content
/* #c, #o, #n, #t, #a, #c, #t-2, #e, #z, #tiret, #m, #o-2, #i, #excl-point */
{ 
    display: inline-block;
    /* font-size: 150%; */
}

#c
{
    animation: appear 2s forwards;
}

#l 
/* #o */
{
    animation: appear 1s 150ms forwards;
}

#a
/* #n */
{
    animation: appear 1s 300ms forwards;
}

#i
/* #t */
{
    animation: appear 1s 450ms forwards;
}

#r
/* #a */
{
    animation: appear 1s 600ms forwards;
}

#e
/* #c-2 */
{
    animation: appear 1s 750ms forwards;
}

#b
/* #t-2 */
{
    animation: appear 1s 900ms forwards;
}

#o
/* #e */
{
    animation: appear 1s 1050ms forwards;
}

#u
/* #z */
{
    animation: appear 1s 1200ms forwards;
}

#t
/* #tiret */
{
    animation: appear 1s 1350ms forwards;
}

#o-2
/* #m */
{
    animation: appear 1s 1500ms forwards;
}

#n
/* #o-2 */
{
    animation: appear 1s 1650ms forwards;
}

#contact-btn
/* #i */
{
    /* animation: appear 1s 1800ms alternate-reverse 2; */
    animation: appear-contact 2s 1800ms forwards;
    /* animation: bigger 1s 1800ms forwards; */
}
</style>