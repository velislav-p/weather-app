import {throwError} from "actions/index";
import {actionTypes} from "actions/types";

import React from 'react';

describe('throwError action creator',()=>{
    let action = throwError();
    it('Has the correct type',()=>{
        expect(action.type).toEqual(actionTypes.THROW_ERROR);
    });

    it('Has the correct payload',()=>{
        const errorMsg = "Error message";
        action = throwError(errorMsg);

        expect(action.payload).toEqual('Error message');
    })
});