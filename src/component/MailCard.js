import React,{useState} from 'react'
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
//import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { CheckBox, Forward, Launch, MoreVert, Print, Reply, Star, } from '@material-ui/icons';
import ReplyIcon from '@material-ui/icons/Reply';
import { makeStyles } from '@material-ui/core/styles';
import Modal from 'react-modal';
import TextFormatIcon from '@material-ui/icons/TextFormat';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import CloseIcon from '@material-ui/icons/Close';
import LinkIcon from '@material-ui/icons/Link';
import { IconButton } from '@material-ui/core';
import SentimentSatisfiedIcon from '@material-ui/icons/SentimentSatisfied';
import PhotoIcon from '@material-ui/icons/Photo';
import ScreenLockRotationIcon from '@material-ui/icons/ScreenLockRotation';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import DeleteIcon from '@material-ui/icons/Delete';
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css';
import './css/MailCard.css'
import { Avatar } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    color: "#fff",
    marginLeft: "5px",
    fontSize: theme.typography.pxToRem(15),
    fontWeight: 400,
  },
}));

function SimpleAccordion() {

  const [modalOpen, setModalOpen] = useState(false)
  const [focus, setFocus] = useState(false)
  const [forward, setForward] = useState(false)

  const [recipient, setRecipient] = useState("")
  const [subject, setSubject] = useState("")
  const [content, setContent] = useState("")
  
  

  const handleForward = () => {
    setModalOpen(true)
    setForward(true)
  }

  const handleReply = () => {
    setModalOpen(true)
    setForward(false)
  }
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Accordion>
        <AccordionSummary
          aria-controls="panel1a-content"
          id="panel1a-header">
            <div className = "accordMid">
            <div className = "accordLeft">
                <CheckBox />
                <Star />
                <Typography className={classes.heading}>userName</Typography>
            </div>
            <div className = "accordMidMain">
                <Typography className = {classes.heading}>
                    Subjects
                </Typography>
                <p className = {classes.heading}>Click Here to see Mail Content</p></div>
                <div className = "accordMidDate">
                <Typography className = {classes.heading}>Timestamp</Typography>
            </div>
            </div>
        </AccordionSummary>
        <AccordionDetails>
          <div className = "accordDetails">
            <div className = "accordDetailsTop">
              <p>Subjects</p>
              <div className = "accordDetailsTopRight">
                <Print />
                <Launch />
              </div>
            </div>
              <div className = "accordDetailsInfo">
                <Avatar />
                <div className = "sendersInfo">
                  <h4>Name of the sender<small>Email</small></h4>
                  <small>To whom the mail sent</small>
                </div>
                <div className = "sendersInfoDate">
                  <div className = "sendersInfoDateOption">
                    <small>Timestamp</small>
                    <Star />
                    <ReplyIcon />
                    <MoreVert />
                  </div>
                </div>
              </div>
              <div className = "mailContent">
                <div className = "mailContentAccord">
                  Content
                </div>
                <ReplyMails />
                <ForwardMails />
                <Modal
                    isOpen={modalOpen}
                    onRequestClose = {() => setModalOpen(false)}
                    shouldCloseOnOverlayClick={false}
                    style={{
                        overlay: {
                        width: 680,
                        height: "auto",
                        backgroundColor: "rgba(0,0,0,0.8)",
                        zIndex: "1000",
                        top: "50%",
                        left: "50%",
                        marginTop: "-250px",
                        marginLeft: "-350px",
                        borderRadius: "none"
                    },
                    content: {
                        margin: 0,
                        padding: 0,
                        border: "none"
                    },
                    }}
                    >
                        <div className = "modalContainer">
                    <div className = "modalContainerTop">
                          <div className = "modalHeader">
                          <p>{ forward ? 'Forward' : "Reply" }</p>
                          <div className = "modalHeaderIcons"> 
                          <IconButton onClick={() =>
                            setModalOpen(false)}>
                              <CloseIcon />
                          </IconButton>
                      </div>
                      </div>
                      <div onClick = {() => setFocus(true)} 
                      className = "modalRecipient">
                      <p>{focus ? "To" : "Recipients"}</p>
                      <input 
                        value = {recipient}
                        onChange = {(e) => setRecipient(e.target.value)}
                        type = "text"
                      />
                  </div>
                  <div className = "modalRecipient">
                      <input 
                        value = {subject}
                        onChange = {(e) => setSubject(e.target.value)}
                        type = "text"
                        placeholder = "Subject"
                      />
                  </div>
                  <div className = "quill">
                      <ReactQuill 
                      value = {content}
                      onChange = {(value) => setContent(value)}
                      placeholder = { forward ? "Add content then forward mail.." : "Add reply to mail"}
                      />
                  </div>
                </div>
                <div className = "modalContainerBottom">
                        <div className = "modalBottom">
                        <button>{ forward ? "Forward" : "Reply" }</button>
                        <TextFormatIcon />
                        <AttachFileIcon />
                        <LinkIcon />
                        <SentimentSatisfiedIcon />
                        <PhotoIcon />
                        <ScreenLockRotationIcon />
                        <div className = "modalBottomLast">
                            <MoreVertIcon />
                            <DeleteIcon />
                        </div>
                      </div>
                    </div>
                </div>
                    </Modal>
                <div className = "mailReplyLinks">
                <div onClick= {handleReply} 
                className = "mailReplyLink">
                  <Reply />
                  <a href = "#">Reply</a>
                  </div>
                  <div onClick= {handleForward}
                  className = "mailReplyLink">
                    <Forward />
                  <a href = "#">Forward</a>
                  </div>
                </div>
                </div>
                </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

const ReplyMails = () =>  {
  return <h1>Reply mail</h1>
};
  
const ForwardMails = () => {
  return <h1>Forward mail</h1>
};

function MailCard() {
    return (
        <div className = "mailCard">
             <SimpleAccordion />
                  </div>
                  ); 
              }

export default MailCard

  