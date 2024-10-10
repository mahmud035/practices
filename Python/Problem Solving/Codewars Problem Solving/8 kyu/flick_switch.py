#  Flick Switch
# *  My Solution


def flick_switch(arr):
    booleans = []
    should_return_true = True

    for element in arr:
        if element == "flick":
            should_return_true = not should_return_true

        booleans.append(should_return_true)

    return booleans


print(flick_switch(["codewars", "flick", "code", "wars"]))
