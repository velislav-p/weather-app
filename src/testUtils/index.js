/**
 * A utility function for finding elements based on a data-test attribute
 * @param wrapped - an Enzyme wrapped object
 * @param value - the data-test value found in the DOM
 * @returns {*}
 */
export const findByTestAttr = (wrapped, value) => {
    return wrapped.find(`[data-test="${value}"]`);
};