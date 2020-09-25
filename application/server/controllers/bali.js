let id = 8;

let baliData = [
    {
        id: 1,
        name: "Benchmade 51",
        company: "Benchmade",
        msrp: "$240",
        rating: '3/5',
        bladesteel: 'D2',
        handle: 'Titanium/G10',
        usedprice: '$180',
        img: 'https://files.knifecenter.com/knifecenter/benchmade-knives/images/BM51_11.jpg'
    },
    {
        id: 2,
        name: 'Benchmade 42',
        company: 'Benchmade',
        msrp: '$250',
        rating: '5/5',
        bladesteel: '154 CPM',
        handle: 'Titanium',
        usedprice: '$500+',
        img: 'https://pics.knifecenter.com/eyJidWNrZXQiOiAiZmlsZXMua25pZmVjZW50ZXIuY29tIiwia2V5IjogImtuaWZlY2VudGVyL2JuY2htZC9pbWFnZXMvYm00Mi5qcGciLCJlZGl0cyI6IHsicmVzaXplIjogeyJ3aWR0aCI6IDU0NSwiaGVpZ2h0IjogNDE1LCJmaXQiOiAiY29udGFpbiIsImJhY2tncm91bmQiOiB7InIiOiAyNTUsImciOiAyNTUsImIiOiAyNTUsImFscGhhIjogMX19fX0='
    },
    {
        id: 3,
        name: "Covenant v2",
        company: "Maxace",
        msrp: "$350",
        rating: '4/5',
        bladesteel: 'Bohler M390',
        handle: 'Titanium/Carbon Fiber',
        usedprice: '$350',
        img: 'https://contestimg.wish.com/api/webimage/5b7a7f301719d636d380c7de-26-large?cozy=1'
    },
    {
        id: 4,
        name: 'Bradley Kimura',
        company: 'Bradley / Bear ops',
        msrp: '$165',
        rating: '1/5',
        bladesteel: '154 CPM',
        handle: 'Steel / G10',
        usedprice: '$70',
        img: 'https://pics.knifecenter.com/eyJidWNrZXQiOiAiZmlsZXMua25pZmVjZW50ZXIuY29tIiwia2V5IjogImtuaWZlY2VudGVyL2JyYWRsZXkvaW1hZ2VzL0JSQURCQ0M5MDBfRzEuanBnIiwiZWRpdHMiOiB7InJlc2l6ZSI6IHsid2lkdGgiOiA1NDUsImhlaWdodCI6IDQxNSwiZml0IjogImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjogeyJyIjogMjU1LCJnIjogMjU1LCJiIjogMjU1LCJhbHBoYSI6IDF9fX19'
    },
    {
        id: 6,
        name: "Krake Raken",
        company: "Squid Industries",
        msrp: "$225",
        rating: '4/5',
        bladesteel: 'AEB-L',
        handle: 'Aluminum',
        usedprice: '$180',
        img: 'https://pics.knifecenter.com/eyJidWNrZXQiOiAiZmlsZXMua25pZmVjZW50ZXIuY29tIiwia2V5IjogImtuaWZlY2VudGVyL3NxdWlkL2ltYWdlcy9TUUtSUktEVEJLbi5qcGciLCJlZGl0cyI6IHsicmVzaXplIjogeyJ3aWR0aCI6IDU0NSwiaGVpZ2h0IjogNDE1LCJmaXQiOiAiY29udGFpbiIsImJhY2tncm91bmQiOiB7InIiOiAyNTUsImciOiAyNTUsImIiOiAyNTUsImFscGhhIjogMX19fX0='
    },
    {
        id: 7,
        name: 'Replicant',
        company: 'Blade Runner Systems',
        msrp: '$315',
        rating: '5/5',
        bladesteel: '154 CPM',
        handle: 'Titanium/G10',
        usedprice: '$270',
        img: 'https://pics.knifecenter.com/eyJidWNrZXQiOiAiZmlsZXMua25pZmVjZW50ZXIuY29tIiwia2V5IjogImtuaWZlY2VudGVyL2Jycy9pbWFnZXMvQlJTUFJQTENUR05fMS5qcGciLCJlZGl0cyI6IHsicmVzaXplIjogeyJ3aWR0aCI6IDU0NSwiaGVpZ2h0IjogNDE1LCJmaXQiOiAiY29udGFpbiIsImJhY2tncm91bmQiOiB7InIiOiAyNTUsImciOiAyNTUsImIiOiAyNTUsImFscGhhIjogMX19fX0='
    },
];

const smallList = ()=>{
    return baliData.map((val)=>{
        const {id,name,img} = val;
        return {id,name,img}
    });
}

module.exports = {
    getList: (req,res) =>{
        res.status(200).send(smallList());
    },

    getKnife: (req,res) =>{
        const {id} = req.params;
        const knife = baliData.find(el => el.id === +id);
        res.status(200).send(knife);
    },

    addKnife: (req,res)=>{
        const {name,company,msrp,rating,bladesteel,handle,usedprice,img} = req.body;
        if(name && company && msrp && rating && bladesteel && handle && usedprice && img){
            let newID = id;
            id++;
            baliData.push({id:newID,name,company,msrp,rating,bladesteel,handle,usedprice,img});
            res.status(200).send(smallList());
        }else{
            res.status(422).send(smallList());
        }

        
    },

    editKnife: (req,res)=>{
        const {name,company,msrp,rating,bladesteel,handle,usedprice,img} = req.body;
        const {id} = req.params;
        if(name && company && msrp && rating && bladesteel && handle && usedprice && img){
            const knife = baliData.find(el=>el.id === +id);
            knife.name = name;
            knife.company = company;
            knife.msrp = msrp;
            knife.rating = rating;
            knife.bladesteel = bladesteel;
            knife.handle = handle;
            knife.usedprice = usedprice;
            knife.img = img;
            res.status(200).send(smallList());
        }else{
            res.status(422).send(smallList());
        }
    },

    deleteKnife: (req,res)=>{
        if(baliData.length > 1){
            const {id} = req.params;
            const index = baliData.findIndex(el=>el === +id);
            baliData.splice(index,1);
            res.status(200).send(smallList());
        }else{
            res.status(422).send(smallList());
        }
    }
}