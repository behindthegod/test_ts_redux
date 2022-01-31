import * as UserActionCreators from './user'
import  * as TodoActionCreators from './todo'
import * as PhotoActionCreators from './pfoto'

export default {
    ...UserActionCreators,
    ...TodoActionCreators,
    ...PhotoActionCreators,
}