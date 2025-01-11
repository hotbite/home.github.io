var char = document.getElementById('char');
var word = document.getElementById('word');
var area = document.getElementById('area');

area.addEventListener('input', function(){
        let content = this.value;
        char.textContent = 'characters '+content.length;
        content.trim();
        let wordlist = content.split(/\s/);

        let words = wordlist.filter(function(element){
            return element != '';
        });
        word.textContent = 'words '+words.length;
});