import metrics from './metrics';
import colors from './colors';
import fonts from './fonts';

const general = {
   
  container: {
    flex: 1,
    backgroundColor: colors.bgColor,
  },
  card: {
    borderRadius: metrics.baseRadius,
    padding: metrics.baseMargin,
    backgroundColor: 'white',
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 4,
  },
  button: {
    height: metrics.formInputHeight, 
    marginBottom: metrics.baseMargin,
    marginTop: metrics.baseMargin,
  },
  gradientButton: {
    width: '100%', 
    height:'100%',
    justifyContent:'center', 
    alignItems: 'center',
  },
};  

export default general;