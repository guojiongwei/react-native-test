import React,{Component} from 'react'
import { View, Text, Image, FlatList, Dimensions } from 'react-native'
const width = Dimensions.get('window').height
import RadioModal from 'react-native-radio-master';
export default class Home extends Component{
    static navigationOptions = {
        title: "首页",
        tabBarIcon: ({ focused }) => {
            const icon = focused
              ? require('../assets/images/homes.png')
              : require('../assets/images/home.png');
            return <Image source={icon} style={{ height: 22, width: 22 }} />;
        }
    }
    constructor(props){
        super(props);
        this.state = {
            list: [],
            selecteList: []
        };
    }
    componentDidMount() {
        fetch('https://www.ele.me/restapi/shopping/v2/menu?restaurant_id=E15953949895731117717&terminal=web').then(res => {
            return res.json()
        }).then(res => {
            let selecteList = []
            res.map(() => {
                selecteList.push(0)
            })
            this.setState({
                list: res,
                selecteList
            })
        })
    }
    render(){
        let { list, language, selecteList } = this.state;
        console.log(selecteList)
        return (
            <View style={{padding:20,flex:1,flexDirection:'column'}}>
            <FlatList
                data={list}
                renderItem={({item, index}) => <View>
                    <Text>{"------------------------" + item.name + "------------------------"}</Text>
                    <RadioModal
                        dataOption={item.foods}
                        options={{id:'virtual_food_id',value:'name',disabled:false}}
                        innerStyle={{width:(width-80)/2}}
                        txtColor={'#000000'}
                        noneColor={'#efefef'}
                        selectedValue={language}
                        onValueChange={(id,item1) => {
                            selecteList.splice(index, 1, id)
                            this.setState({
                                selecteList
                            })
                        }}
                        seledImg={require('./../assets/images/homes.png')}
                        selImg={require('./../assets/images/home.png')}
                        style={{ flexDirection:'row',
                            flexWrap:'wrap',
                            alignItems:'flex-start',
                            flex:1,
                            backgroundColor:'#ffffff',marginTop:10
                        }}
                    />    
                </View>
                }
            />            
           </View>
        )
    }
}