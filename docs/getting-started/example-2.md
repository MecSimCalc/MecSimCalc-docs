---
sidebar_label: "Example 2"
sidebar_position: 4
---

# Example 2: Exploring the COS Function

This tutorial provides instructions to create this [web-based](https://www.mecsimcalc.com/app/5862152/explore_the_cos_function) Python **_app_** to plot the cos function for particular parameters provided by the _**user**_. The _**user**_ is required to provide the parameters $A$ and $B$ in the equation $y=Acos(Bx)$ along with the limits $a$ and $b$ of the plot.

<div style={{width: "100%", height: "800px", overflow: "hidden"}}>
<iframe src='https://www.mecsimcalc.com/app/5862152/explore_the_cos_function' style={{position:"relative", left:"-45px", top:"-48px"}} width="100%" height="800" title="MecSimCalc" frameborder="0"></iframe>
</div>

## Step 1: Info

- You can fill in the required fields as shown in the following image.
- You can use the default **Favicon Image**.
- The **Primary Image** used is available [here](/docs/getting-started/ex2_primary.png).

<div style={{textAlign: 'center'}}>

![img alt](/docs/getting-started/ex2_info.png)

</div>

## Step 2: Inputs

Start by creating the input group: "Function Parameters" and two numerical input variables.

Edit the first input variable:

- Set the variable **name** to `capitala`.
- Set **label** to "A".
- Set the **default value** to 1
- Restrict the range between a **min** of -10 and a **max** of 10 with a **step** of 0.001.

Click on **APPLY CHANGES** to save your work:

<div style={{textAlign: 'center'}}>

![img alt](/docs/getting-started/ex2_edit_input1.png)

</div>

Similarly, apply the changes shown in the following image to the second input.

<div style={{textAlign: 'center'}}>

![img alt](/docs/getting-started/ex2_edit_input2.png)

</div>

You can also add a rich text input that clarifies to the _**user**_ the form that the cosine equation uses and the limits of the parameters "A" and "B". To do so, click on the ![img alt](/docs/getting-started/add_btn.png) button and drag in a **RichText** input. Hover over the recently created input and click on the ![img alt](/docs/getting-started/edit_btn.png) button to edit it. Add the required text and use the latex equation generator if desired, as shown in the following image:

<div style={{textAlign: 'center'}}>

![img alt](/docs/getting-started/ex2_edit_input3.png)

</div>

You should now see the following inputs on your screen:

<div style={{textAlign: 'center'}}>

![img alt](/docs/getting-started/ex2_group1.png)

</div>

Using your mouse, drag the rich text field and move it above the parameters "A" and "B":

<div style={{textAlign: 'center'}}>

![img alt](/docs/getting-started/ex2_group1_drag.png)

</div>

Now, go ahead and create a new input group titled: "Plot Parameters". Create two inputs "a" and "b" to specify the left and right boundaries of the plot. Set their variable names as `a` and `b` respectively. Change their default values to -10 and 10 respectively. You should now see the following on your screen:

<div style={{textAlign: 'center'}}>

![img alt](/docs/getting-started/ex2_inputs.png)

</div>

## Step 3: Code

As described in [Generating Graphics](/getting-started/graphics), you need to first define the `plt_show` utility function which generates an embeddable image before defining the `main` function:

```python
import matplotlib.pyplot as plt
import numpy as np
import base64
import io

def plt_show(plt, width=500, dpi=100):
    # Converts matplotlib plt to image data string
    #   plt is the matplotlib pyplot or figure
    #   width is the width of the graph image in pixels
    #   dpi (dots per inch) is the resolution of the image
    bytes = io.BytesIO()
    plt.savefig(bytes, format='png', dpi=dpi)  # Save as png image
    if hasattr(plt, "close"):
        plt.close()
    bytes.seek(0)
    base64_string = "data:image/png;base64," + \
        base64.b64encode(bytes.getvalue()).decode("utf-8")
    return "<img src='" + base64_string + "' width='" + str(width) + "'>"

def main(inputs):
    # Code to generate a plot using matplot lib (plt)
    # The following line uses the plt_show function to create an embeddable image
    img = plt_show(plt)
    return {"Image": img}
```

To access the inputs generated in the previous step, click on `<> Input Variables`, and copy each variable and paste it in a new variable assignment inside the `main` function:

```python
def main(inputs):
    A = inputs['capitala']
    B = inputs['capitalb']
    a = inputs['a']
    b = inputs['b']
    # Code to generate a plot using matplotlib (plt)
    # The following line uses the plt_show function to create an embeddable image
    img = plt_show(plt)
    return {"Image": img}
```

You can now use [matplotlib functions](https://matplotlib.org/stable/plot_types/index) to generate the required plot:

```python
def main(inputs):
    A = inputs['capitala']
    B = inputs['capitalb']
    a = inputs['a']
    b = inputs['b']
    x = np.arange(a,b,0.01)
    y = A*(np.cos(B*x))
    plt.plot(x,y)
    plt.xlabel("x")
    plt.ylabel("y")
    # The following line uses the plt_show function to create an embeddable image
    img = plt_show(plt)
    return {"Image": img}
```

## Step 4: Output

You can simply output the image generated by the code:

<div style={{textAlign: 'center'}}>

![img alt](/docs/getting-started/ex2_outputs.png)

</div>

## Step 5: Docs

You can skip adding any documentation for this tutorial.

## Step 6: Preview

In the preview section, confirm that the app works as expected:

<div style={{textAlign: 'center'}}>

![img alt](/docs/getting-started/ex2_preview.png)

</div>

Once ready, click on **PUBLISH** to publish the app on the web.
This version of the app is available here:

https://www.mecsimcalc.com/app/5862152/explore_the_cos_function

Make sure to also check out the app that allows the user to input and plot any valid expression in x:

https://www.mecsimcalc.com/app/0153466/function_plot