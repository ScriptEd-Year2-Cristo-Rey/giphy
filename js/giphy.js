window.Giphy = new (function(){
    this.key = "dc6zaTOxFJmzC";
    this.root = "//api.giphy.com";
    
    var that = this;
    
    this.searchByWord = function(word, limit, callback){
        var query = that.root+'/v1/gifs/search?'+$.param({
            q : word
            ,limit : limit
            ,api_key : that.key
        });
        $.ajax({
            url : query
            ,success:function(response){
                callback(response.data);
            }
        });
    }
})();