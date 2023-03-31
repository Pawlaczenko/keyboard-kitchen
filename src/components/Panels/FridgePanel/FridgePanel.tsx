import Panel from '../Panel/Panel'
import { PANELS, PANEL_THEMES } from '../../../data/panels';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../app/store';
import { INGREDIENTS_TAG, IStoredIngredient } from '../../../data/ingredients';
import FridgeGroup from './FridgeGroup';
import { toggleFridge } from '../../../features/fridge/fridgeSlice';

const FridgePanel = () => {
  const fridgeStorage = useSelector((state: RootState) => state.fridge.ingredients);
  const fridgeCategories = new Map<INGREDIENTS_TAG,string>([
    [INGREDIENTS_TAG.VEGETABLE,"#409E49"],
    [INGREDIENTS_TAG.SPICE,"#FFAA00"],
    [INGREDIENTS_TAG.FRUIT,"#C83135"],
    [INGREDIENTS_TAG.DIARY,"#FF9F61"],
    [INGREDIENTS_TAG.DRINK,"#6DB0FF"],
    [INGREDIENTS_TAG.GRAINS,"#7E3200"],
    [INGREDIENTS_TAG.MEAT,"#FF7178"],
    [INGREDIENTS_TAG.OIL,"#E29704"],
  ])

  const getIngredientsByTag = (tag: INGREDIENTS_TAG) : IStoredIngredient[] => {
    return fridgeStorage.filter((ingredient) => ingredient.ingredient.tags.includes(tag));
  }

  const printFridgeStorage = () => {
      return [...fridgeCategories].map(([key, value]) => {
        const ingredients = getIngredientsByTag(key);
        return ingredients.length !== 0 && <FridgeGroup groupTitle={key} color={value} ingredients={ingredients} />
      });
  }

  return (
    <Panel title="Fridge" panelType={PANELS.FRIDGE}>
        {printFridgeStorage()}
    </Panel>
  )
}

export default FridgePanel