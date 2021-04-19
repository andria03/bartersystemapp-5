import React,{Component} from 'react';
import {View,Text,StyleSheet,TextInput,TouchableOpacity,Alert} from 'react-native';
import {Modal} from 'react-native';
import db from '../config';
import firebase from 'firebase';

export default class WelcomeScreen extends Component{
    constructor(){
      super();
      this.state={
        emailId:'',
        password:'',
        firstName:'',
        lastName:'',
        address:'',
        phoneNumber:'',
        confirmPassword:'',
        isModalVisible:'false'
      }
    }
    userSignUp = (emailId, password,confirmPassword) =>{
        if(password !== confirmPassword){
            return Alert.alert("password doesn't match\nCheck your password.")
        }else{
          firebase.auth().createUserWithEmailAndPassword(emailId, password)
          .then(()=>{
            db.collection('users').add({
              first_name:this.state.firstName,
              last_name:this.state.lastName,
              phone_Number:this.state.contact,
              email_id:this.state.emailId,
              address:this.state.address
            })
            return  Alert.alert(
                 'User Added Successfully',
                 '',
                 [
                   {text: 'OK', onPress: () => this.setState({"isModalVisible" : false})},
                 ]
             );
          })
          .catch((error)=> {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            return Alert.alert(errorMessage)
          });
        }
      }
      userLogin=(emailId,password)=>{
        console.log()
        firebase.auth().signInWithEmailAndPassword(emailId,password).then(()=>{
            alert("Succesfully Login");
            this.props.navigation.navigate("HomScreen");
            
        }).catch((error)=>{
            var errorCode = error.code;
            var errorMessage = error.message;
            return Alert.alert(errorMessage);
        })
    };
     

    showModal=()=>(
        <Modal
           animationType="fade"
           transparent={true}
           visible={this.state.isModalVisible}
        >
        <View style={styles.modalContainer}></View>
        <TextInput
          style={styles.formTextInput}
          placeholder ={"First Name"}
          onChangeText={(text)=>{
            this.setState({
              firstName: text
            })
          }}
        />
        <TextInput
          style={styles.formTextInput}
          placeholder ={"Last Name"}
          onChangeText={(text)=>{
            this.setState({
              lastName: text
            })
          }}
        />
        <TextInput
          style={styles.formTextInput}
          placeholder ={"Phone Number"}
          maxLength ={10}
          keyboardType={'numeric'}
          onChangeText={(text)=>{
            this.setState({
              contact: text
            })
          }}
        />
        <TextInput
          style={styles.formTextInput}
          placeholder ={"Address"}
          multiline = {true}
          onChangeText={(text)=>{
            this.setState({
              address: text
            })
          }}
        />
        <TextInput
          style={styles.formTextInput}
          placeholder ={"Email"}
          keyboardType ={'email-address'}
          onChangeText={(text)=>{
            this.setState({
              emailId: text
            })
          }}
        /><TextInput
          style={styles.formTextInput}
          placeholder ={"Password"}
          secureTextEntry = {true}
          onChangeText={(text)=>{
            this.setState({
              password: text
            })
          }}
        /><TextInput
          style={styles.formTextInput}
          placeholder ={"Confrim Password"}
          secureTextEntry = {true}
          onChangeText={(text)=>{
            this.setState({
              confirmPassword: text
            })
          }}
        />
            <TouchableOpacity
            style={styles.registerButton}
            onPress={()=>
              this.userSignUp(this.state.emailId, this.state.password, this.state.confirmPassword)

            }
          >
          <Text style={styles.registerButtonText}>Register</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.cancelButton}
            onPress={()=>this.setState({"isModalVisible":false})}
          >
          <Text style={{color:'#ff5722'}}>Cancel</Text>
          </TouchableOpacity>
        </Modal>     
    )      
    render(){
        return(
           <View>{
            this.showModal()
          }
            <Text style={{color:'#9CADCE',fontSize:18,fontWeight:'bold',marginTop:50,marginLeft:33}}>username</Text>
                <View style={{alignItems:'center'}}>
                    <TextInput
                    style={styles.loginBox}
                    placeholder="enter email"
                    keyboardType='email-address'
                    onChangeText={(text)=>{
                        this.setState({
                            emailId: 'text'
                        })
                    }}
                    />
                    <TextInput
                    style={styles.loginBox}
                   placeholder="Enter password"
                   secureTextEntry={true}
                   onChangeText={(Text)=>{
                       this.setState({
                           password:'text'
                        })
                    }}
                    />
                
                </View>
                 
                <View style={{alignItems:'center'}}>
                
                

                <TouchableOpacity
                     style={[styles.button,{marginBottom:10}]}
                     onPress={()=>{
                       console.log("Log in")
                        this.userLogin(this.state.emailId,this.state.password);
                     }}>
                     <Text style={{color:'#ffffff',fontSize:18,fontWeight:'bold'}}>Log In</Text></TouchableOpacity>
                     <TouchableOpacity 
                        style={styles.button}
                        onPress={()=>this.setState({ isModalVisible:true})} >
                        <Text style={{color:'#ffffff',fontSize:18,fontWeight:'bold'}}>Sign Up</Text>
                     </TouchableOpacity>
                </View>
           </View> 

        ) 
    
        
    }
}  
const styles = StyleSheet.create({
    modalContainer:{
        flex:1,
        borderRadius:0,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:"#ffffff",
        marginRight:30,
        marginLeft : 30,
        marginTop:80,
        marginBottom:80,
      },
      formTextInput:{
        width:"75%",
        height:35,
        alignSelf:'center',
        borderColor:'#ffab91',
        borderRadius:10,
        borderWidth:1,
        marginTop:20,
        padding:10
      },
      button:{
        backgroundColor:'#9CADCE',
        width:150,
        borderRadius:20,
        alignItems:'center'
    },
    loginBox:{
        width:300,
        height:40,
        borderBottomWidth:1.5,
        borderColor:'#9CADCE',
        fontSize:20,
        margin:10,
        paddingLeft:10
    }
})
