Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactNative=require('react-native');
var _reactNativePs=require('react-native-ps');var _reactNativePs2=_interopRequireDefault(_reactNativePs);

var _HeaderRow=require('./HeaderRow');var _HeaderRow2=_interopRequireDefault(_HeaderRow);
var _HeaderCell=require('./HeaderCell');var _HeaderCell2=_interopRequireDefault(_HeaderCell);
var _Row=require('./Row');var _Row2=_interopRequireDefault(_Row);
var _Cell=require('./Cell');var _Cell2=_interopRequireDefault(_Cell);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _objectWithoutProperties(obj,keys){var target={};for(var i in obj){if(keys.indexOf(i)>=0)continue;if(!Object.prototype.hasOwnProperty.call(obj,i))continue;target[i]=obj[i];}return target;}





































var DataTable=function DataTable(_ref){var children=_ref.children,style=_ref.style,other=_objectWithoutProperties(_ref,['children','style']);return(
_react2.default.createElement(_reactNative.View,_extends({style:[styles.base].concat(style)},other),
children));};


DataTable.propTypes={



children:_react.PropTypes.node.isRequired,
style:_react.PropTypes.oneOfType([
_react.PropTypes.object,
_react.PropTypes.array])};exports.default=



DataTable;

DataTable.HeaderRow=_HeaderRow2.default;
DataTable.HeaderCell=_HeaderCell2.default;
DataTable.Row=_Row2.default;
DataTable.Cell=_Cell2.default;

var styles=(0,_reactNativePs2.default)({
base:{
flex:1},


web:{
base:{
width:'100%',
height:'100%',

display:'table'}}});