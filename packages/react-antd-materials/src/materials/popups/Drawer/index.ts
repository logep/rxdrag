import { Drawer } from "@rxdrag/react-antd-components";
import { IComponentMaterial } from "@rxdrag/react-core";
import { ButtonMaterial } from "../../Button";
import { DrawerContentMaterial } from "../DrawerContent";
import { DrawerExtraMaterial } from "../DrawerExtra";
import { DrawerFooterMaterial } from "../DrawerFooter";
import { DrawerTitleMaterial } from "../DrawerTitle";
import { DrawerDesigner } from "./designer";
import { icon } from "./icon";
import { locales, resourceLocales } from "./locales";
import { materialSchema } from "./schema";

const name = "Drawer"
export const DrawerMaterial: IComponentMaterial = {
  componentName: name,
  component: Drawer,
  designer: DrawerDesigner,
  designerLocales: locales,
  propsSchema: materialSchema,
  designerProps: {
    //readOnly: true,
  },
  resource: {
    name: name,
    resourceLocales: resourceLocales,
    icon: icon,
    color: "#8B79EC",
    elements: [
      {
        componentName: name,
        slots: {
          title: {
            componentName: "DrawerTitle",
            children: [
              {
                componentName: "Text",
                props: {
                  content: name,
                }
              }
            ]
          },
          extra: {
            componentName: "DrawerExtra",
          },
          content: {
            componentName: "DrawerContent",
          },
          footer: {
            componentName: "DrawerFooter",
          },
          actionComponent: {
            componentName: "Button",
            props: {
              title: name,
            },
          }
        },
      }
    ]
  },
  slots: {
    title: DrawerTitleMaterial,
    extra: DrawerExtraMaterial,
    content: DrawerContentMaterial,
    footer: DrawerFooterMaterial,
    actionComponent: ButtonMaterial,
  },
  behaviorRule: {
    droppable: false,
    noPlaceholder: true,
  }
}