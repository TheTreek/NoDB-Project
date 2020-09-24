let id = 3;

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
    }
];

module.exports = {
    getList: (req,res) =>{
        const smallList = baliData.map((val)=>{
            const {id,name,img} = val;
            return {id,name,img}
        })
        res.status(200).send(smallList);
    },

    getKnife: (req,res) =>{
        const {id} = req.params;
        const knife = baliData.find(el => el.id === +id);
        res.status(200).send(knife);
    }
}