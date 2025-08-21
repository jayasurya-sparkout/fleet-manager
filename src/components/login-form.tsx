"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

const formSchema = z.object({
    email: z.string().min(2).max(50),
    password: z.string().min(2).max(50),
})

export function LoginForm() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    })

    const onSubmit = (values: z.infer<typeof formSchema>) => {
        console.log("Form Submitted:", values)
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <div className="flex flex-col items-center gap-2 text-center">
                    <h1 className="text-xl md:text-3xl font-semibold">
                        Neuralpilot Fleet Manager
                    </h1>
                    <p className="text-muted-foreground text-sm md:text-[16px] text-balance font-normal">
                        Efficiently track, monitor & optimize your fleet in real time.
                    </p>
                </div>
                <div className="grid gap-6 md:gap-8">
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="text-sm md:text-[16px]">Email</FormLabel>
                                <FormControl>
                                    <Input
                                        type="email"
                                        placeholder="Enter your email"
                                        className="md:h-[52px]"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="text-sm md:text-[16px]">Password</FormLabel>
                                <FormControl>
                                    <div className="flex flex-col gap-3">
                                        <Input
                                            type="password"
                                            placeholder="Enter your password"
                                            className="md:h-[52px]"
                                            {...field}
                                        />
                                        <a
                                            href="#"
                                            className="ml-auto text-sm text-muted-foreground underline-offset-4 underline"
                                        >
                                            Forgot password?
                                        </a>
                                    </div>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <Button
                        type="submit"
                        className="w-full md:h-[52px] mt-2 md:mt-[16px] cursor-pointer"
                    >
                        Login
                    </Button>
                </div>
            </form>
        </Form>
    )
}
