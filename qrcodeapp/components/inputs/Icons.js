import React, { forwardRef } from 'react';
import Add from '@material-ui/icons/Add';
import AddBox from '@material-ui/icons/AddBox';
import ArrowUpward from '@material-ui/icons/ArrowUpward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import Close from '@material-ui/icons/Close';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Description from '@material-ui/icons/Description';
import Download from '@material-ui/icons/GetApp';
import Edit from '@material-ui/icons/Edit';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import Fullscreen from '@material-ui/icons/Fullscreen';
import FullscreenExit from '@material-ui/icons/FullscreenExit';
import Help from '@material-ui/icons/Help';
import Icon from '@material-ui/core/Icon';
import ImportantOutline from '@material-ui/icons/ErrorOutline';
import Info from '@material-ui/icons/Info';
import LastPage from '@material-ui/icons/LastPage';
import Menu from '@material-ui/icons/Menu';
import OpenInNew from '@material-ui/icons/OpenInNew';
import Refresh from '@material-ui/icons/Refresh';
import Remove from '@material-ui/icons/Remove';
import Replay from '@material-ui/icons/Replay';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import Settings from '@material-ui/icons/Settings';
import Today from '@material-ui/icons/Today';
import ViewColumn from '@material-ui/icons/ViewColumn';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Warning from '@material-ui/icons/Warning';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import FileCopy from '@material-ui/icons/FileCopy';
import PostAdd from '@material-ui/icons/PostAdd';
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > .fa': {
      margin: theme.spacing(2),
    },
    '& > .fas': {
      // margin: theme.spacing(1),
      // borderRadius: '50%/50%'
    },
    '& > .far': {
      // margin: theme.spacing(2),
      verticalAlign: 'text-bottom',
      padding: '1em',
    },
  },
}));
const FontAwesome = ({ className }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Icon className={className} style={{ fontSize: '18px' }} />
    </div>
  );
};
// TODO: break down into fcns
const Icons = {
  Add: AddBox,
  AddNoBox: Add,
  DoubleRight: () => <FontAwesome className="fas fa-angle-double-right" />,
  Calendar: Today,
  Cancel: () => (
    <div style={{ color: '#ffffff', fontSize: '1rem' }}>
      <i className="fas fa-ban fa-2x"></i>
    </div>
  ),
  Check: Check,
  CheckFAS: () => (
    <div style={{ color: '#ffffff', fontSize: '1rem' }}>
      <i className="fas fa-check fa-2x"></i>
    </div>
  ),
  Circle: () => (
    <div>
      <i class="fas fa-circle fa-xs"></i>
    </div>
  ),
  Clear: Clear,
  Clipboard: () => <FontAwesome className="fas fa-clipboard" />,
  Close: Close,
  CSV: ({ color, size }) => (
    <div style={{ color: color || '#ffffff', fontSize: '1rem' }}>
      <i className={`fas fa-file-csv fa-${size ? size : 'lg'}`}></i>
    </div>
  ),
  Delete: DeleteOutline,
  Description,
  DetailPanel: ChevronRight,
  Download,
  Edit: Edit,
  Error: ({ optionalIconStyles }) => (
    <div style={{ color: '#c62828' }}>
      <i className="fas fa-times-circle fa-sm" style={optionalIconStyles}></i>
    </div>
  ),
  ExpandMoreIcon,
  ExpandLessIcon,
  ExpandLess,
  ExpandMore,
  Export: SaveAlt,
  Filter: FilterList,
  FileCopy,
  FirstPage: FirstPage,
  Folder: () => <FontAwesome className="fas fa-folder" />,
  Fullscreen,
  FullscreenExit,
  Help,
  HourglassHalf: () => (
    <div style={{ color: '#ffffff', fontSize: '1rem' }}>
      <i className="fas fa-hourglass-half fa-lg"></i>
    </div>
  ),
  ImportantOutline,
  Info,
  LastPage: LastPage,
  List: () => <FontAwesome className="far fa-list-alt" />,
  Menu,
  MicrosoftWord: ({ color, size }) => (
    <div style={{ color: color || '#ffffff', fontSize: '1rem' }}>
      <i className={`fas fa-file-word fa-${size ? size : 'lg'}`}></i>
    </div>
  ),
  OpenInNew,
  NextPage: ChevronRight,
  PostAdd,
  PreviousPage: ChevronLeft,
  Refresh,
  Replay,
  ResetSearch: Clear,
  Return: () => (
    <div style={{ color: '#ffffff', fontSize: '1rem' }}>
      <i className="fas fa-arrow-left fa-2x"></i>
    </div>
  ),
  Search: Search,
  Settings,
  SortArrow: ArrowUpward,
  ThirdStateCheck: Remove,
  Tools: () => <FontAwesome className="far fa-toolbox" />,
  User: ({ color }) => (
    <div style={{ color: color || '#ffffff', fontSize: '1rem' }}>
      <i className="fas fa-user fa-lg"></i>
    </div>
  ),
  UserEdit: () => (
    <div style={{ color: '#000000', fontSize: '1rem' }}>
      <i className="fas fa-user-edit fa-lg"></i>
    </div>
  ),
  UserSlash: () => (
    <div style={{ color: '#ffffff', fontSize: '1rem' }}>
      <i className="fas fa-user-slash fa-lg"></i>
    </div>
  ),
  ValidationAsterisk: () => (
    <div style={{ color: '#c62828', fontSize: '0.5rem' }}>
      <i className="fas fa-asterisk fa-lg"></i>
    </div>
  ),
  ViewColumn: ViewColumn,
  Visibility,
  VisibilityOff,
  Warning: (props) => <Warning {...props} />,

  tableIcons: {
    Add: forwardRef((props, ref) => <AddBox ref={ref} {...props} />),
    Check: forwardRef((props, ref) => <Check ref={ref} {...props} />),
    Clear: forwardRef((props, ref) => <Clear ref={ref} {...props} />),
    Delete: forwardRef((props, ref) => <DeleteOutline ref={ref} {...props} />),
    DetailPanel: forwardRef((props, ref) => <ChevronRight ref={ref} {...props} />),
    Edit: forwardRef((props, ref) => <Edit ref={ref} {...props} />),
    Export: forwardRef((props, ref) => <SaveAlt ref={ref} {...props} />),
    Filter: forwardRef((props, ref) => <FilterList ref={ref} {...props} />),
    FirstPage: forwardRef((props, ref) => <FirstPage ref={ref} {...props} />),
    LastPage: forwardRef((props, ref) => <LastPage ref={ref} {...props} />),
    NextPage: forwardRef((props, ref) => <ChevronRight ref={ref} {...props} />),
    PreviousPage: forwardRef((props, ref) => <ChevronLeft ref={ref} {...props} />),
    ResetSearch: forwardRef((props, ref) => <Clear ref={ref} {...props} />),
    Search: forwardRef((props, ref) => <Search ref={ref} {...props} />),
    SortArrow: forwardRef((props, ref) => <ArrowUpward ref={ref} style={{ color: 'white' }} {...props} />),
    ThirdStateCheck: forwardRef((props, ref) => <Remove ref={ref} {...props} />),
    ViewColumn: forwardRef((props, ref) => <ViewColumn ref={ref} {...props} />),
  },
};

export default Icons;
