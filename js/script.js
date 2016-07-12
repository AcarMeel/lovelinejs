var users = [{
        name: 'Suzy',
        gender: 'Female',
        hobby: 'Cooking',
        avatar: 'girl-01.png'
    }, {
        name: 'Adam',
        gender: 'Male',
        hobby: 'Diving',
        avatar: 'boy-01.png'
    }, {
        name: 'Lissa',
        gender: 'Female',
        hobby: 'Go Dancing',
        avatar: 'girl-02.png'
    }, {
        name: 'Joe',
        gender: 'Male',
        hobby: 'Sports',
        avatar: 'boy-02.png'
    }, {
        name: 'Miranda',
        gender: 'Female',
        hobby: 'Art',
        avatar: 'girl-03.png'
    }, {
        name: 'Liam',
        gender: 'Gay',
        hobby: 'Read',
        avatar: 'boy-03.png'
    }, {
        name: 'Betzy',
        gender: 'Bisexual',
        hobby: 'Shopping',
        avatar: 'girl-04.png'
    }, {
        name: 'Grek',
        gender: 'Male',
        hobby: 'Ordinary things',
        avatar: 'boy-04.png'
    }

];


window.addEventListener('load', function() {

	//VARIABLES
    var results = document.getElementById('results');
    var searchBtn = document.getElementById('btnSearch');
    var genderSelect = document.getElementById('gender');

    // FUNCTION SEARCH
    function search() {
    	// variables
        var hobbyField = document.getElementById('hobby');
        var hobby = hobbyField.value;
        var genderField = document.getElementById('gender');
        var gender = genderField.options[genderField.selectedIndex].value;
        var resultsHtml = '';
        var numUsers = users.length;

        for (var i = 0; i < numUsers; i++) {
            if (gender === users[i].gender || gender === 'All') {
                if (hobby === users[i].hobby || hobby === '') {
                    resultsHtml += '<div class="person-row">\
							<img src="img/' + users[i].avatar + '" alt="Girl">\
							<div class="person-info">\
							<div>' + users[i].name + '</div>\
							<div>' + users[i].hobby + '</div>\
							<input type="submit" value="Become friends">\
							</div>\
							</div>';
                }
                results.innerHTML = resultsHtml;
            }
        }
    }

    //execute search when click or change
    searchBtn.addEventListener('click', search);
    genderSelect.addEventListener('change', search);
    search(); //execute at the beginning

});
