'use strict';



const { BinaryTree, tree_intersection: treeintersection } = require('../hasmap')



describe('Testing tree intersection ', () => {



    test('Testing intersection ', () => {


        const BT = new BinaryTree();


        BT.add(150);
        BT.add(100);
        BT.add(250);
        BT.add(75);
        BT.add(160);
        BT.add(125);
        BT.add(175);
        BT.add(200);
        BT.add(350);
        BT.add(300);
        BT.add(500);





        const BT2 = new BinaryTree();

        BT2.add(42);
        BT2.add(100);
        BT2.add(600);
        BT2.add(15);
        BT2.add(160);
        BT2.add(200);
        BT2.add(350);
        BT2.add(125);
        BT2.add(175);
        BT2.add(4);
        BT2.add(500);

        let bttree= treeintersection(BT, BT2);
        expect(bttree).toEqual([ [ '100' ],
        [ '125' ],
        [ '160' ],
        [ '175' ],
        [ '200' ],
        [ '350' ],
        [ '500' ] ]);

    })
})

























