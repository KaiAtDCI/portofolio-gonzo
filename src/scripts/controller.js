function link(href) {
    console.log('link(href): href=' + href);
    window.location.href = href;  // ToDo: implement target attribute
}

function delayedLink(href, delay) {
    console.log('delayedLink(href, delay): href=' + href + ', delay=' + delay);
    setTimeout(() => link(href), delay);
}

function hideBody() {
    console.log('hideBody()');
    document.body.style.visibility = 'hidden';
}

function showBody() {
    console.log('showBody()');
    document.body.style.visibility = 'visible';
}

function hideElementById(id) {
    console.log('hideElementById(id)... id=' + id);
    document.getElementById(id).style.visibility = 'hidden';
}

function showElementById(id) {
    console.log('showElementById(id)... id=' + id);
    document.getElementById(id).style.visibility = 'visible';
}

function hideElementsByClassName(className) {
    console.log('hideElementByClassName(className)... className=' + className);
    const elements = document.getElementsByClassName(className);
    for (let element of elements) {
        element.style.visibility = 'hidden';
    }
}

function showElementsByClassName(className) {
    console.log('hideElementByClassName(className)... className=' + className);
    const elements = document.getElementsByClassName(className);
    for (let element of elements) {
        element.style.visibility = 'visible';
    }
}

function animateBody(animationPropertyValue) {
    console.log('slide(), animationPropertyValue:' + animationPropertyValue);
    document.body.style.animation = animationPropertyValue;
}

function animateElementById(id, animationPropertyValue) {
    console.log('animateElementById(id): id=' + id);
    document.getElementById(id).style.animation = animationPropertyValue;
}

function animateElementsByClassName(className, animationPropertyValue) {
    console.log('animateElementByClassName(className): className=' + className);
    const elements = document.getElementsByClassName(className);
    for (let element of elements) {
        resetElementAnimation(element)
        // assign/start animation
        elementClone.style.animation = animationPropertyValue;

        // ToDo: Use this as trigger for next animation?! Instead of Promise-Chain?!
        // trigger end of animation
        // element.addEventListener(
        //     'webkitAnimationEnd',
        //     'mozAnimationEnd',
        //     'MSAnimationEnd',
        //     'oanimationend',
        //     'animationend',
        //     () => {
        //         console.log('animationend');
        //     }
        // );
    }
}

function resetElementAnimation(element) {
    // reset animation by cloning and substituting element
    // console.log(elementClone)
    elementClone = element.cloneNode();
    elementClone.innerHTML = element.innerHTML;
    element.parentNode.insertBefore(elementClone, element.nextSibling)
    element.parentNode.removeChild(element);
}

function startTaskChain() {
    return new Promise ((resolve) => resolve())
}

function delayedTask(task, ms) {
    return function() {
        return new Promise(resolve => setTimeout(() => {
            task();
            resolve();
        }, ms));
    };
}


// function linkToPage(href, pageOutAnimation, pageInAnimation, navOutAnimation, navInAnimation) {
//     const navigationAnimationInterval = 1500;
//     const pageAnimationInterval = 1500;
//     console.log('linkToPage:' + href);
//     console.log('pageOutAnimation' + pageOutAnimation);
//     console.log('pageInAnimation' + pageInAnimation);
//
//     startTaskChain()
//         .then(() => fadeNavigation(navOutAnimation), navigationAnimationInterval)
//         .then(delayedTask(() => animateBody(pageOutAnimation), pageAnimationInterval))
//         .then(delayedTask(() => {
//             substitutePage("external-html/contact.html");
//             hideBody();
//         }, pageAnimationInterval))
// }