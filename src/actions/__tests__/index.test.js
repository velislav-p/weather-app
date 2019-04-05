import {fetchData} from "actions/index";
import {FETCH_DATA} from "actions/types";

describe('fetchData',()=>{
    it('Has the correct type',()=>{
        const action = fetchData();

        expect(action.type).toEqual(FETCH_DATA);
    });

});