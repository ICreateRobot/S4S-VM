/**
 * Block argument types
 * @enum {string}
 */
const ArgumentType = {
    /**
     * Numeric value with angle picker
     */
    ANGLE: 'angle',

    /**
     * Boolean value with hexagonal placeholder
     */
    BOOLEAN: 'Boolean',

    /**
     * Numeric value with color picker
     */
    COLOR: 'color',

    /**
     * Numeric value with text field
     */
    NUMBER: 'number',

    /**
     * String value with text field
     */
    STRING: 'string',

    /**
     * String value with matrix field
     */
    MATRIX: 'matrix',


    MATRIXCUSTOM: 'matrix_custom',
    MATRIXONEROW: 'matrix_onerow',
    /**
     * MIDI note number with note picker (piano) field
     */
    NOTE: 'note',

    /**
     * Inline image on block (as part of the label)
     */
    IMAGE: 'image',

    /**
     * Name of costume in the current target
     */
    COSTUME: 'costume',

    /**
     * Name of sound in the current target
     */
    SOUND: 'sound',
      /**
     *限制输入大小0-4
    */
    NUMRES0_4: 'numres0D4',

    /**
    *限制输入大小0-9
    */
    NUMRES0_9: 'numres0D9',

    /**
    *限制输入大小0-10
    */
    NUMRES0_10: 'numres0D10',

    /**
    *限制输入大小40-500
    */
    NUMRES40_500: 'numres40D500',

    /**
    *限制输入大小20-10000
    */
    NUMRES20_10000: 'numres20D10000',

    /**
    *限制输入大小0-255
    */
    NUMRES0_255: 'numres0D255',

    /**
    *限制输入大小-255-255
    */
    NUMRES_255_255: 'numresD255D255',

    /**
    *限制输入大小0-300
    */
    NUMRES0_300: 'numres0D300',

    /**
    *限制输入大小-100-100
    */
    NUMRES_100_100: 'numresD100D100',

    /**
    *限制输入大小0-
    */
    NUMRES0: 'numres0',
    /**
    *限制输入大小1
    */
    NUMRES1: 'numres1',

    /**
    *限制输入大小0-100
    */
    NUMRES0_100: 'numres0D100',

    /**
    *限制输入大小-360-360
    */
    NUMRES_360_360: 'numresD360D360',

    /**
    *限制输入大小-32400-32400
    */
    NUMRES_32400_32400: 'numresD32400D32400',

    /**
    *限制输入大小0-65535
    */
    NUMRES0_65535: 'numres0D65535',

    /**
    *限制输入大小-1000-1000
    */
    NUMRES_1000_1000: 'numresD1000D1000',

    /**
    *限制输入大小0-180
    */
    NUMRES0_180: 'numres0D180',

    /**
    *限制输入大小0-99
    */
    NUMRES0_99: 'numres0D99',

    /**
    *限制输入大小1-12
    */
    NUMRES1_12: 'numres1D12',

    /**
    *限制输入大小1-31
    */
    NUMRES1_31: 'numres1D31',

    /**
    *限制输入大小0-23
    */
    NUMRES0_23: 'numres0D23',

    /**
    *限制输入大小0-59
    */
    NUMRES0_59: 'numres0D59',

    /**
    *限制输入大小0-1
    */
    NUMRES0_1: 'numres0D1',

    /**
    *限制输入大小0-1023
    */
    NUMRES0_1023: 'numres0D1023',

    
};

module.exports = ArgumentType;
