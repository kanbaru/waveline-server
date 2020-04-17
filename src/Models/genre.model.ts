import { prop, getModelForClass, ReturnModelType } from "@typegoose/typegoose";

export const genres = [
	"Aggrotech",
	"Ambient",
	"Beat",
	"Bluegrass",
	"Blues",
	"Chiptune",
	"Core",
	"Country",
	"Cumbia",
	"Dance",
	"Dancehall",
	"Drum and Bass",
	"Dub",
	"Dubstep",
	"EBM",
	"Flamenco",
	"Grunge",
	"Goa",
	"Gospel",
	"Hardstyle",
	"Hip-hop",
	"House",
	"Humppa",
	"Industrial",
	"Jazz",
	"Metal",
	"Oi!",
	"Polka",
	"Pop",
	"Punk",
	"Rap",
	"Rave",
	"Reggae",
	"Rockabilly",
	"Samba",
	"Schranz",
	"Ska",
	"Soul",
	"Techhouse",
	"Techno",
	"Tekkno",
	"Trance",
	"Triphop",
	"Twostep",
	"Western",
];

export const subgenres = [
	"30s",
	"40s",
	"50s",
	"60s",
	"70s",
	"80s",
	"Acid",
	"Alternative",
	"Ambient",
	"Anatolian",
	"Arena",
	"Art",
	"Australian",
	"Australian",
	"Avantgarde",
	"Balearic",
	"Balkan",
	"Battle",
	"Black",
	"Body",
	"Bossa nova",
	"Brit",
	"Celtic",
	"Chinese",
	"Christian",
	"Comedy",
	"Conscious",
	"Cow",
	"Crust",
	"Dark",
	"Death",
	"Dirty",
	"Doom",
	"Drone",
	"Dream",
	"East Coast",
	"Electroclash",
	"Electronic",
	"Emo",
	"Euro",
	"Experimental",
	"Extreme",
	"Flower",
	"Folk",
	"Free",
	"Freestyle",
	"Fucking",
	"Fun",
	"Funk",
	"Fusion",
	"Future",
	"Gangsta",
	"Garage",
	"Ghetto",
	"Glam",
	"Gospel",
	"Gothic",
	"Grind",
	"Groove",
	"Happy",
	"Hard",
	"Hardcore",
	"Harmonica",
	"Handsup",
	"Heavy",
	"Horror",
	"Indian",
	"Indie",
	"Independent",
	"Industrial",
	"Instrumental",
	"Latin",
	"Lounge",
	"Mainstream",
	"Medieval",
	"Melodic",
	"Minimal",
	"Neo",
	"New age",
	"Ninja",
	"Nintendo",
	"Noise",
	"Nu",
	"Pagan",
	"Pirate",
	"Post",
	"Power",
	"Progressive",
	"Psychedelic",
	"Skate",
	"Sludge",
	"Southern",
	"Space",
	"Speed",
	"Stoner",
	"Street",
	"Sunshine",
	"Surf",
	"Swedish",
	"Swing",
	"Symphonic",
	"Synth",
	"Teutonic",
	"Traditional",
	"Trash",
	"Viking",
	"Vocal",
	"Wave",
	"West Coast",
	"World",
];

export class Genre {
	public static async findOrCreate(this: ReturnModelType<typeof Genre>, name: string) {
		const genre = await GenreModel.findOne({ name });
		return genre ? genre : await GenreModel.create({ name });
	}

	@prop()
	public name: string;

}

export const GenreModel = getModelForClass(Genre);
