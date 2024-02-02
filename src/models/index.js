const Album = require("./Album");
const Artist = require("./Artist");
const Genre = require("./Genre");

//table pivot: genreArtist 
Genre.belongsToMany(Artist, { through: 'genreArtist' })
Artist.belongsToMany(Genre, { through: 'genreArtist' })

//Album-> artistId
Album.belongsTo(Artist)
Artist.hasMany(Album)