$(function() {
    // Пользовательские функции
    $('.accordionSection__h1').on('click', function(e) {
        e.preventDefault();
        $(this).toggleClass('accordionSection__h1_style_hovered accordionSection__h1_style_before');
        $(this).next().slideToggle();
    });
    // Работа с dataObj
    console.log('Страница загружена.');
    console.log('Создаем массивы скилов, имен, друзей');

    // skills array:
    var skills = _.map(dataObjArray, "skills");
    skills = _.flatten(skills);
    skills = _.uniq(skills);

    function sortArr(a, b) {
        a = _.lowerCase(a);
        b = _.lowerCase(b);
        if (a > b)
            return 1;
        if (a < b)
            return -1;
        if (a == b)
            return 0;
    }

    console.log('Skills array:', skills.sort(sortArr));

    // // names array:
    var names = _.sortBy(dataObjArray, function(o) {
        return o.friends.length;
    });
    names = _.map(names, "name");
    names = _.reverse(names);

    console.log('Names array:', names);


    // friends array:
    var friends = _.map(dataObjArray, "friends");
    friends = _.flatten(friends, "name");
    friends = _.map(friends, "name");
    friends = _.uniq(friends);

    function friendsArr(a, b) {
        if (a > b)
            return 1;
        if (a < b)
            return -1;
        if (a == b)
            return;
    }

    console.log('Friends array:', friends.sort(friendsArr));
});
